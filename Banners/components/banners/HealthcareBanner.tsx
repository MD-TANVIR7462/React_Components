"use client";

import { motion } from "framer-motion";
import { Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HealthcareBanner() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
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
            <Heart className="text-white w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Health
              <br />
              <span className="text-emerald-300">Our Priority</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert healthcare services with a personal touch.
              Schedule your appointment today for better health tomorrow.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-emerald-300">
                Book Appointment <Calendar className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Our Services
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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Healthcare"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}