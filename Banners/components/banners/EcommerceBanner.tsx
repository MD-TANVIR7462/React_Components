"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EcommerceBanner() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-sm"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 h-full flex items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                NEW SEASON
              </span>
              <Star className="text-yellow-400 w-5 h-5" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            >
              Spring
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
                Collection
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 mb-8 text-yellow-300"
            >
              <TrendingUp className="w-6 h-6" />
              <span className="text-xl">Trending Fashion 2024</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl mb-8 text-gray-300"
            >
              Discover the latest trends in fashion and explore our new arrivals.
              Up to 50% off on selected items.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black hover:opacity-90 transform hover:scale-105 transition-all duration-300"
              >
                Shop Now <ShoppingBag className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-white border-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              >
                View Lookbook <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, -1, 1, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3"
                  alt="Fashion Model"
                  className="rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-xl"
              >
                <div className="text-white">
                  <div className="font-bold">Limited Time Offer</div>
                  <div className="text-yellow-300">Save up to 50%</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}