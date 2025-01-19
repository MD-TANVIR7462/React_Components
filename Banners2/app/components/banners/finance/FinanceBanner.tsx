"use client";

import { motion } from "framer-motion";
import { LineChart, Wallet, TrendingUp, Shield } from "lucide-react";

export default function FinanceBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071')] bg-cover bg-fixed bg-center"
      />
      
      <div className="absolute inset-0">
        <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-block rounded-2xl bg-emerald-500/20 p-4"
            >
              <LineChart className="h-12 w-12 text-emerald-400" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
            >
              Smart Finance
              <span className="mt-2 block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                For Your Future
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 max-w-xl text-lg text-emerald-100"
            >
              Take control of your financial journey with our advanced banking solutions.
              Secure, efficient, and tailored to your needs.
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
                className="rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-emerald-600"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border-2 border-emerald-500 px-8 py-4 font-semibold text-emerald-500 transition-colors hover:bg-emerald-500 hover:text-white"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:col-span-2 lg:block"
          >
            <div className="grid gap-6">
              {[
                {
                  icon: Wallet,
                  title: "Smart Banking",
                  desc: "Manage your money with intelligent tools",
                },
                {
                  icon: TrendingUp,
                  title: "Investment Growth",
                  desc: "Watch your wealth multiply",
                },
                {
                  icon: Shield,
                  title: "Secure Transactions",
                  desc: "Bank with confidence",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  className="flex items-start gap-6 rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
                >
                  <div className="rounded-xl bg-emerald-500/20 p-3">
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-emerald-200">{item.desc}</p>
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