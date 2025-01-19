"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EcommerceBanner from "./components/banners/ecommerce/EcommerceBanner";
import AgencyBanner from "./components/banners/agency/AgencyBanner";
import HealthcareBanner from "./components/banners/healthcare/HealthcareBanner";
import EducationBanner from "./components/banners/education/EducationBanner";
import FinanceBanner from "./components/banners/finance/FinanceBanner";
import TechnologyBanner from "./components/banners/technology/TechnologyBanner";
import RealEstateBanner from "./components/banners/real-estate/RealEstateBanner";
import FoodBanner from "./components/banners/food/FoodBanner";
import FitnessBanner from "./components/banners/fitness/FitnessBanner";
import EntertainmentBanner from "./components/banners/entertainment/EntertainmentBanner";

const categories = [
  { id: "ecommerce", label: "E-commerce", component: EcommerceBanner },
  { id: "agency", label: "Agency", component: AgencyBanner },
  { id: "healthcare", label: "Healthcare", component: HealthcareBanner },
  { id: "education", label: "Education", component: EducationBanner },
  { id: "finance", label: "Finance", component: FinanceBanner },
  { id: "technology", label: "Technology", component: TechnologyBanner },
  { id: "real-estate", label: "Real Estate", component: RealEstateBanner },
  { id: "food", label: "Food & Beverages", component: FoodBanner },
  { id: "fitness", label: "Fitness", component: FitnessBanner },
  { id: "entertainment", label: "Entertainment", component: EntertainmentBanner },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("ecommerce");

  const ActiveComponent = categories.find((cat) => cat.id === activeCategory)?.component;

  return (
    <div className="relative min-h-screen">
      <div className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 rounded-full px-6 py-2 font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-screen"
        >
          {ActiveComponent && <ActiveComponent />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}