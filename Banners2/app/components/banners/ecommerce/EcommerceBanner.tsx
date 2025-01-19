"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export default function EcommerceBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070')] bg-cover bg-center opacity-20"
      />
      
      <div className="relative flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <ShoppingBag className="h-16 w-16 text-purple-300" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Discover Your Style
            <span className="block text-purple-300">Shop the Future</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-purple-100"
          >
            Experience the next generation of online shopping. Curated collections,
            exclusive deals, and personalized recommendations just for you.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-8 py-3 font-semibold text-purple-900 shadow-lg transition-colors hover:bg-purple-100"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Catalog
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}