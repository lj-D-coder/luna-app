"use client";
import Navbar from "../components/Navbar";
import TopServices from "../components/TopServices";
import Testimony from "../components/Testimonial";
import Footer from "../components/Footer";
import IconGrid from "../components/IconGrid";
import Banner from "../components/Banner";
import AppLink from "../components/AppLink";
import HowItWorks from "../components/HowItWorks";
import { useEffect, useState, useRef } from "react";
import { Loader } from "@/components/ServiceBooking/Loader";
import Offer from "@/components/Offer";
import Search from "@/components/Search";
import FloatingSocial from "@/components/FloatingSocial";

export default function Home() {
  const API_URL_BANNER = "/api/banner";
  const API_URL_ICON_GRID = "api/category";
  const API_URL_HERO = "/api/hero";
  const API_URL_TESTIMONY = "api/testimony";

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [bannerData, setBannerData] = useState<[]>([]);
  const [categories, setCategories] = useState<[]>([]);
  const [heroData, setHeroData] = useState<[]>([]);
  const [testimonyData, setTestimony] = useState<[]>([]);

  useEffect(() => {
    const fetchAllHomePageData = async () => {
      try {
        const [bannerResponse, iconGridResponse, heroResponse, testimonyResponse] = await Promise.all([
          fetch(API_URL_BANNER, { cache: "no-store" }),
          fetch(API_URL_ICON_GRID, { cache: "no-store" }),
          fetch(API_URL_HERO, { cache: "no-store" }),
          fetch(API_URL_TESTIMONY, { cache: "no-store" }),
        ]);

        if (bannerResponse.ok && iconGridResponse.ok && heroResponse.ok && testimonyResponse.ok) {
          const [bannerData, iconGridData, heroData, testimonyData] = await Promise.all([
            bannerResponse.json(),
            iconGridResponse.json(),
            heroResponse.json(),
            testimonyResponse.json(),
          ]);
          setBannerData(bannerData.bannerData);
          setCategories(iconGridData.categoryItem);
          setHeroData(heroData.heroData);
          setTestimony(testimonyData.testimonyData);
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
      <Search propClassName="relative pt-20 md:hidden" placeholder="what services are you looking for ?" />
      <FloatingSocial />
      <IconGrid categories={categories} sliderData={heroData} />
      <Offer />
      {/* <Testimony testimonyData={testimonyData} /> */}
      <TopServices />
      <Banner banners={bannerData} />
      {/* <AppLink /> */}
      <HowItWorks />
      <Footer />
    </>
  );
}
