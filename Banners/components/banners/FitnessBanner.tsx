"use client";

import { motion } from "framer-motion";
import { Dumbbell, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FitnessBanner() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Fitness"
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Dumbbell className="text-red-500 w-16 h-16 mb-6" />
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Transform Your
            <br />
            <span className="text-red-500">Body & Mind</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join our state-of-the-art fitness center.
            Expert trainers, premium equipment, and personalized programs.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <Button size="lg" className="bg-red-500 hover:bg-red-600">
              Start Now <Trophy className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Free Trial
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}