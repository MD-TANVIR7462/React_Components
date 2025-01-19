"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Trophy } from "lucide-react";

export default function EducationBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-fixed bg-center"
      />
      
      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
            >
              Unlock Your
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Learning Potential
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mx-auto mb-8 max-w-lg text-lg text-blue-100 lg:mx-0"
            >
              Embark on a journey of discovery with our world-class education platform.
              Learn from industry experts and achieve your academic goals.
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
                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-900 shadow-lg transition-colors hover:bg-blue-50"
              >
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse Courses
              </motion.button>
            </motion.div>
          </motion.div>
          
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: GraduationCap, title: "Expert Teachers", desc: "Learn from the best" },
                { icon: BookOpen, title: "Rich Content", desc: "Comprehensive materials" },
                { icon: Users, title: "Community", desc: "Learn together" },
                { icon: Trophy, title: "Achievement", desc: "Track your progress" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * (index + 3), duration: 0.8 }}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
                >
                  <item.icon className="mb-4 h-8 w-8 text-blue-300" />
                  <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-blue-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}