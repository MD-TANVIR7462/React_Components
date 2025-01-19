"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HealthcareBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?q=80&w=2072')] bg-cover bg-center"
      />
      
      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <Heart className="h-16 w-16 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl"
            >
              Caring for Your
              <span className="block">Health & Wellness</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mx-auto mb-8 max-w-lg text-lg text-teal-50 lg:mx-0"
            >
              Experience healthcare reimagined. Our team of expert professionals
              is dedicated to providing you with personalized care and support.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-8 py-3 font-semibold text-teal-600 shadow-lg transition-colors hover:bg-teal-50"
              >
                Book Appointment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto aspect-square w-full max-w-lg rounded-full bg-white/10 backdrop-blur-lg">
              <motion.img
                initial={{ y: 20 }}
                animate={{ y: [20, 0, 20] }}
                transition={{ duration: 4, repeat: Infinity }}
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072"
                alt="Healthcare Professional"
                className="absolute -top-8 left-1/2 h-[120%] w-auto -translate-x-1/2 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}