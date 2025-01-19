"use client";

import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CharityBanner() {
  return (
    <div className="relative h-screen bg-emerald-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 h-full flex items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <Heart className="text-red-500 w-16 h-16 mb-6" />
            </motion.div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-emerald-800 mb-6"
            >
              Together We Can
              <br />
              Make a Difference
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-emerald-700 mb-8"
            >
              Join us in our mission to create positive change.
              Every donation counts towards building a better future.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <Button size="lg" className="bg-red-500 hover:bg-red-600">
                Donate Now <Heart className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Join Us <Users className="ml-2" />
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Charity Work"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}