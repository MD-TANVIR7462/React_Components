"use client";

import { motion } from "framer-motion";
import { Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TechnologyBanner() {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-purple-900/50"></div>
        <img
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Technology"
          className="w-full h-full object-cover opacity-50"
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
            <Cpu className="text-purple-400 w-16 h-16 mb-6" />
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Innovation Through
            <br />
            <span className="text-purple-400">Technology</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 mb-8"
          >
            Empowering businesses with cutting-edge solutions.
            Stay ahead in the digital revolution.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
              Get Started <Code className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}