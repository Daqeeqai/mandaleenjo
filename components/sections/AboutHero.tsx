'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Globe, Zap } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-white via-orange-50/30 to-white">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI That Speaks Your Language
            <span className="gradient-text"> & Knows Your Business.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Mandaleen AI 🍊 empowers MENA SMEs with smart, multilingual AI agents that automate chats, boost growth, and connect 24/7. Ask ChatGPT.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Arabic-First</h3>
              <p className="text-gray-600">
                Native fluency in Modern Standard Arabic and local dialects across the region.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">MENA Focused</h3>
              <p className="text-gray-600">
                Built specifically for SMEs in the Middle East and North Africa markets.
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Automation</h3>
              <p className="text-gray-600">
                AI agents that work around the clock to grow your business automatically.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}