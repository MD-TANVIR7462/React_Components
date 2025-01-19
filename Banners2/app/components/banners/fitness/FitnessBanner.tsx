"use client";

import { motion } from "framer-motion";
import { Dumbbell, Target, Users, Trophy } from "lucide-react";

export default function FitnessBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-fixed bg-center"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-indigo-900/80">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-block"
            >
              <Dumbbell className="h-16 w-16 text-purple-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
            >
              Transform Your
              <span className="mt-2 block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Body & Mind
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 max-w-xl text-lg text-purple-100"
            >
              Join our state-of-the-art fitness center and embark on a journey to
              your best self. Expert trainers, premium equipment, and motivating
              atmosphere.
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
                className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:from-purple-600 hover:to-indigo-600"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-purple-500 px-8 py-4 font-semibold text-purple-400 transition-colors hover:bg-purple-500 hover:text-white"
              >
                View Classes
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-purple-500/30 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Personal Goals",
                  desc: "Customized fitness plans",
                  image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2070"
                },
                {
                  icon: Users,
                  title: "Group Classes",
                  desc: "Motivating workouts",
                  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075"
                },
                {
                  icon: Dumbbell,
                  title: "Premium Equipment",
                  desc: "State-of-the-art gear",
                  image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070"
                },
                {
                  icon: Trophy,
                  title: "Achievement",
                  desc: "Track your progress",
                  image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2074"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-lg"
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover opacity-50 transition-all duration-300 group-hover:scale-110 group-hover:opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50" />
                  </div>
                  <div className="relative p-6">
                    <item.icon className="mb-4 h-8 w-8 text-purple-400" />
                    <h3 className="mb-2 font-semibold text-white group-hover:text-purple-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-purple-200">{item.desc}</p>
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