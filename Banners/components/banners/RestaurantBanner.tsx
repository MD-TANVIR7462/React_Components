"use client";

import { motion } from "framer-motion";
import { Utensils, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RestaurantBanner() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative container mx-auto px-4 h-full flex items-center"
      >
        <div className="max-w-3xl text-center mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <Utensils className="text-yellow-400 w-16 h-16 mx-auto mb-6" />
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Experience Fine Dining
            <br />
            <span className="text-yellow-400">at Its Best</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-200 mb-8"
          >
            Indulge in exquisite cuisine crafted by world-class chefs.
            Book your table today for an unforgettable dining experience.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Reserve Table <Clock className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Menu <Utensils className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}