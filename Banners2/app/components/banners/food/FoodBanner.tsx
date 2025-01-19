"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Coffee, Clock, Star } from "lucide-react";

export default function FoodBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-orange-900 to-red-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')] bg-cover bg-fixed bg-center"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <UtensilsCrossed className="h-16 w-16 text-orange-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
            >
              Savor the
              <span className="mt-2 block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 max-w-xl text-lg text-orange-100"
            >
              Experience culinary excellence at its finest. Our master chefs create
              unforgettable dishes that will tantalize your taste buds.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
              >
                Reserve Table
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-orange-500 px-8 py-4 font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
              >
                View Menu
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Star,
                  title: "Fine Dining",
                  desc: "Michelin-starred experience",
                  image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
                },
                {
                  icon: Coffee,
                  title: "Artisan Drinks",
                  desc: "Craft beverages & wines",
                  image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070"
                },
                {
                  icon: UtensilsCrossed,
                  title: "Master Chefs",
                  desc: "World-class culinary team",
                  image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070"
                },
                {
                  icon: Clock,
                  title: "Perfect Timing",
                  desc: "Impeccable service",
                  image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50" />
                  </div>
                  <div className="relative p-6">
                    <item.icon className="mb-4 h-8 w-8 text-orange-400" />
                    <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-orange-200">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}