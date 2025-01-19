"use client";

import { motion } from "framer-motion";
import { Plane, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TravelBanner() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-400 to-purple-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 h-full flex items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Plane className="text-white w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Explore the
              <br />
              <span className="text-yellow-300">World</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover amazing destinations and create unforgettable memories.
              Book your next adventure today.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-yellow-300">
                Plan Your Trip <Map className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Destinations
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Travel Destination"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}