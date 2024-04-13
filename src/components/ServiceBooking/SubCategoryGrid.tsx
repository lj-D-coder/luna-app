
"use client"
import { FC, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Loader } from "./Loader";

interface SubCategoryProps {
    categoryUrl: string;
}

export type SubCategory = {
    _id: string;
    parentCategoryName: String,
    parentCategoryId: String,
    subCategoryId: Number;
    subCategoryName: string;
    subcategoryLabel: string;
    IconUrl: string;
};

export const SubCategory: FC<SubCategoryProps> = ({ categoryUrl }) => {

    console.log(categoryUrl);
    const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/services/${categoryUrl}`;
    const [isLoading, setIsLoading] = useState(true);
    const [services, setSubCategory] = useState<SubCategory[]>([]);
    const [error, setError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        fetchData(API_URL);
    }, []);

    const toggleModal = (isOpen: boolean) => {
        setIsModalOpen(isOpen);
    };

    async function fetchData(url: string) {
        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setSubCategory(data.services);
                setIsLoading(false);
            } else {
                setError(true);
                setIsLoading(false);
            }
        } catch (error) {
            setError(true);
            setIsLoading(false);
        }
    }



    return (
        <div className="col-span-12 md:col-span-4">
            <div className="w-full md:w-[350px] mx-auto my-1">
                {/* <div className="text-3xl font-semibold mb-4">{categoryUrl.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Service</div> */}
                <div className="bg-white shadow rounded-lg p-4">
                    <div className="font-medium mb-4">Select a service</div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <img src="https://placehold.co/128x128" alt="Placeholder image of a person servicing an AC unit" className="mb-2 mx-auto" />
                            <div className="text-sm">Service</div>
                        </div>
                        <div className="text-center">
                            <img src="https://placehold.co/128x128" alt="Placeholder image of a person refilling gas in an AC unit" className="mb-2 mx-auto" />
                            <div className="text-sm">Repair & gas refill</div>
                        </div>
                        <div className="text-center">
                            <img src="https://placehold.co/128x128" alt="Placeholder image of a person installing or uninstalling an AC unit" className="mb-2 mx-auto" />
                            <div className="text-sm">Install & uninstall</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
