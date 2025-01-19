"use client";

import { motion } from "framer-motion";
import { Rocket, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgencyBanner() {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative container mx-auto px-4 h-full flex items-center"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Rocket className="text-blue-400 w-16 h-16 mb-8" />
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            We Create
            <br />
            <span className="text-blue-400">Digital Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 mb-8"
          >
            Transform your business with cutting-edge digital solutions.
            We bring your ideas to life with precision and creativity.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get Started <ChevronRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Our Work
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}