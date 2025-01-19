"use client";

import { motion } from "framer-motion";
import { Film, Music, Gamepad, Tv } from "lucide-react";

export default function EntertainmentBanner() {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-900 to-rose-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=2071')] bg-cover bg-fixed bg-center"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/90 to-rose-900/90">
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
              <Film className="h-16 w-16 text-pink-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
            >
              Endless
              <span className="mt-2 block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Entertainment
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 max-w-xl text-lg text-pink-100"
            >
              Dive into a world of unlimited entertainment. Movies, music, games,
              and shows - all in one place for your enjoyment.
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
                className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:from-pink-600 hover:to-rose-600"
              >
                Start Watching
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-pink-500 px-8 py-4 font-semibold text-pink-400 transition-colors hover:bg-pink-500 hover:text-white"
              >
                Browse Library
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
                  icon: Film,
                  title: "Movies & Shows",
                  desc: "Blockbusters & series",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: Music,
                  title: "Music",
                  desc: "Top hits & classics",
                  color: "from-rose-500 to-pink-500"
                },
                {
                  icon: Gamepad,
                  title: "Gaming",
                  desc: "Latest releases",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: Tv,
                  title: "Live TV",
                  desc: "Stream anywhere",
                  color: "from-rose-500 to-pink-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={floatingAnimation}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  <div className={`mb-4 inline-block rounded-xl bg-gradient-to-r ${item.color} p-3`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white group-hover:text-pink-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-pink-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}