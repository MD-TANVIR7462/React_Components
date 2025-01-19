"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import EcommerceBanner from "@/components/banners/EcommerceBanner";
import AgencyBanner from "@/components/banners/AgencyBanner";
import CharityBanner from "@/components/banners/CharityBanner";
import RestaurantBanner from "@/components/banners/RestaurantBanner";
import TravelBanner from "@/components/banners/TravelBanner";
import RealEstateBanner from "@/components/banners/RealEstateBanner";
import EducationBanner from "@/components/banners/EducationBanner";
import HealthcareBanner from "@/components/banners/HealthcareBanner";
import TechnologyBanner from "@/components/banners/TechnologyBanner";
import FitnessBanner from "@/components/banners/FitnessBanner";

const banners = [
  { id: 1, component: EcommerceBanner, name: "E-commerce" },
  { id: 2, component: AgencyBanner, name: "Agency" },
  { id: 3, component: CharityBanner, name: "Charity" },
  { id: 4, component: RestaurantBanner, name: "Restaurant" },
  { id: 5, component: TravelBanner, name: "Travel" },
  { id: 6, component: RealEstateBanner, name: "Real Estate" },
  { id: 7, component: EducationBanner, name: "Education" },
  { id: 8, component: HealthcareBanner, name: "Healthcare" },
  { id: 9, component: TechnologyBanner, name: "Technology" },
  { id: 10, component: FitnessBanner, name: "Fitness" }
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const CurrentBannerComponent = banners[currentBanner].component;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CurrentBannerComponent />
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="flex gap-2 bg-black/50 backdrop-blur-md p-4 rounded-full">
          {banners.map((banner, index) => (
            <motion.div
              key={banner.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={currentBanner === index ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCurrentBanner(index);
                  setIsAutoPlay(false);
                }}
                className={`text-xs transition-all duration-300 ${
                  currentBanner === index
                    ? "bg-white text-black hover:bg-gray-200 scale-110"
                    : "text-white border-white hover:bg-white/10"
                }`}
              >
                {banner.name}
              </Button>
            </motion.div>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-white border-white hover:bg-white/10 backdrop-blur-md"
        >
          {isAutoPlay ? "Pause" : "Auto Play"}
        </Button>
      </div>
    </div>
  );
}