"use client";

import { motion } from "framer-motion";
import { Home, MapPin, Key, Search } from "lucide-react";

export default function RealEstateBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075')] bg-cover bg-fixed bg-center"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <Home className="h-16 w-16 text-amber-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
            >
              Find Your
              <span className="mt-2 block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Dream Home
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 max-w-xl text-lg text-slate-300"
            >
              Discover your perfect property with our extensive collection of homes.
              From cozy apartments to luxury estates, we have it all.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative mb-8 max-w-xl"
            >
              <input
                type="text"
                placeholder="Enter location or property type..."
                className="w-full rounded-full bg-white/10 px-6 py-4 pr-12 text-white placeholder-white/50 backdrop-blur-lg transition-colors focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <Search className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-white/50" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-amber-400 px-8 py-4 font-semibold text-slate-900 shadow-lg transition-colors hover:bg-amber-500"
              >
                Search Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Listings
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="grid gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Prime Locations",
                  desc: "Find properties in the best neighborhoods",
                },
                {
                  icon: Key,
                  title: "Easy Process",
                  desc: "Streamlined buying and selling experience",
                },
                {
                  icon: Home,
                  title: "Diverse Portfolio",
                  desc: "Wide range of properties to choose from",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  className="flex items-start gap-6 rounded-2xl bg-white/5 p-6 backdrop-blur-lg"
                >
                  <div className="rounded-xl bg-amber-400/20 p-3">
                    <item.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.desc}</p>
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