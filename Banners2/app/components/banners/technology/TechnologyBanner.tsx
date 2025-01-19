"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Globe, Layers } from "lucide-react";

export default function TechnologyBanner() {
  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      transition: { duration: 3, repeat: Infinity },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-fixed bg-center"
      />
      
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20"
      />
      
      <div className="absolute inset-0">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500/50 blur-xl" />
                <div className="relative rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 p-4">
                  <Cpu className="h-12 w-12 text-white" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
            >
              Future of Tech
              <span className="mt-2 block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 max-w-xl text-lg text-gray-300"
            >
              Embrace the future with cutting-edge technology solutions.
              Innovation meets excellence in every line of code.
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
                className="rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-cyan-500/25"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition-colors hover:bg-white/20"
              >
                Documentation
              </motion.button>
            </motion.div>
          </motion.div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500/30 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: "Clean Code", desc: "Optimized for performance" },
                { icon: Globe, title: "Global Scale", desc: "Worldwide deployment" },
                { icon: Layers, title: "Architecture", desc: "Robust & scalable" },
                { icon: Shield, title: "Security", desc: "Enterprise-grade protection" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  className="group rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-colors hover:bg-white/10"
                >
                  <div className="mb-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-3">
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white group-hover:text-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}