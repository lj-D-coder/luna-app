"use client";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Testimony from "../components/Testimonial";
import Footer from "../components/Footer";
import IconGrid from "../components/IconGrid";
import Banner from "../components/Banner";
import AppLink from "../components/AppLink";
import HowItWorks from "../components/HowItWorks";
import { useEffect, useState } from "react";
import { Loader } from "@/components/ServiceBooking/Loader";


export default function Home() {
  const API_URL_BANNER = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/banner`;
  const API_URL_ICON_GRID = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/category`;
  const API_URL_HERO = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/hero`;
  const API_URL_TESTIMONY = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/testimony`;
  const API_URL_SEOTEXT = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/seotext`;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [bannerData, setBannerData] = useState<[]>([]);
  const [categories, setCategories] = useState<[]>([]);
  const [heroData, setHeroData] = useState<[]>([]);
  const [testimonyData, setTestimony] = useState<[]>([]);
  const [seoTextData, setSeotext] = useState<[]>([]);

  useEffect(() => {
    const fetchAllHomePageData = async () => {
      try {
        const [bannerResponse, iconGridResponse, heroResponse, testimonyResponse, seotextResponse] = await Promise.all([
          fetch(API_URL_BANNER),
          fetch(API_URL_ICON_GRID),
          fetch(API_URL_HERO),
          fetch(API_URL_TESTIMONY),
          fetch(API_URL_SEOTEXT),
        ]);

        if (bannerResponse.ok && iconGridResponse.ok && heroResponse.ok && testimonyResponse.ok && seotextResponse.ok) {
          const [bannerData, iconGridData, heroData, testimonyData, seoTextData] = await Promise.all([
            bannerResponse.json(),
            iconGridResponse.json(),
            heroResponse.json(),
            testimonyResponse.json(),
            seotextResponse.json()

          ]);
          setBannerData(bannerData.bannerData);
          setCategories(iconGridData.categoryItem);
          setHeroData(heroData.heroData);
          setTestimony(testimonyData.testimonyData);
          setSeotext(seoTextData.seoTextData);
          setIsLoading(false);
        } else {
          setError(true);
          setIsLoading(false);
        }
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchAllHomePageData();
  }, []);

  if (error) {
    return <h3>An error occurred when fetching data. Please check the API and try again.</h3>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <IconGrid categories={categories} sliderData={heroData} />
      <Info />
      <Banner banners={bannerData} />
      <Testimony testimonyData={testimonyData} />
      <AppLink />
      <HowItWorks />
      <Footer textData={seoTextData} />
    </>
  );
}
