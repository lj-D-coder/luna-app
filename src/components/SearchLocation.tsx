import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import target from "../assets/images/target.svg";
import Image from "next/image";
import GoogleMapComponent from "./Map";

type SearchResult = {
  keyword: string;
  urlSlug: string;
};

export default function Search({ placeholder }: { placeholder: string }) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  // state for map location service
  const [showMap, setShowMap] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  const handleSetLocation = async (location: { lat: number; lng: number }) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`);
    const data = await response.json();
    const fullAddress = data.results[0].formatted_address;
    // const parts = fullAddress.split(','); 
    // const cityAndState = parts.slice(1, 2).join(',');
    setLocation(fullAddress);
    setShowMap(false);
  };
  

  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prevActiveIndex) => Math.min(prevActiveIndex + 1, results.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prevActiveIndex) => Math.max(prevActiveIndex - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (results[activeIndexRef.current]) {
        handleSelectResult(results[activeIndexRef.current]);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [results]);

  async function handleSearch(term: string) {
    setTerm(term);
    if (term) {
      // Fetch the search results from your API
      const res = await fetch(`/api/search?query=${term}`);
      const data = await res.json();
      setResults(data.searches);
      setActiveIndex(0); // Reset active index
    } else {
      setResults([]);
    }
  }

  function handleSelectResult(result: SearchResult) {
    // Redirect to the selected result page
    router.push(`/${result.urlSlug}`);
  }

  return (
    <div className="absolute w-full md:w-5/6 px-5 z-10 -mt-[70px] md:-mt-[110px] top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex flex-col md:flex-row flex-1 flex-shrink-0 justify-center items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full md:w-3/6">
          <input
            className="block w-full h-[50px] rounded-full pl-10 text-base outline-2 placeholder:text-gray-300 bg-white bg-opacity-80  focus:outline-none"
            placeholder={placeholder}
            value={term}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-200" />
          {!location && (<div className="absolute z-10 right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2">
            <Image src={target} alt="target-icon" />
          </div>)}
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div>
              {!location && (
                <button
                  className="rounded-full bg-blue-100 text-black py-1 pl-5 pr-8"
                  onClick={() => {
                    setShowMap(true);
                  }}
                >
                  Set my location
                </button>
              )}

              {showMap && <GoogleMapComponent onClose={() => setShowMap(false)} onSetLocation={handleSetLocation} />}

              {location && <p>{location}</p>}
            </div>
          </div>
          {term ? (
            results.length > 0 ? (
              <div
                className="absolute w-full mt-2 bg-black/40 rounded-md shadow-lg max-h-60 overflow-auto"
                onMouseLeave={() => setResults([])} // Reset results when mouse leaves
              >
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer hover:bg-gray-100 py-1 px-4 ${
                      activeIndex === index ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleSelectResult(result)}
                  >
                    {result.keyword}
                  </div>
                ))}
              </div>
            ) : (
              <div className="absolute w-full mt-2 rounded-md shadow-lg max-h-60 overflow-auto py-1">Not found!</div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}