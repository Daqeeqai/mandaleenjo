'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#FF7A00]/20 to-[#FF4500]/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-[#FF4500]/10 to-[#FF7A00]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FF7A00]/5 to-transparent rounded-full" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="h-6 w-6 text-[#FF7A00]" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-40 opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Zap className="h-8 w-8 text-[#FF4500]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF7A00]/10 to-[#FF4500]/10 rounded-full px-6 py-3 mb-12 border border-[#FF7A00]/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="h-4 w-4 text-[#FF7A00]" />
            <span className="text-sm font-medium text-gray-700">
             💬 Book a Free Demo
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gray-900">Turn Conversations</span>
            <br />
            <span className="gradient-text">into Growth</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI agents that reply instantly on WhatsApp, Instagram, Facebook & your website—24/7, in perfect Arabic.


          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              asChild
              className="font-semibold px-8 py-4 text-lg shadow-2xl transition-all duration-300 group"
            >
              <a href="/product">
                Explore Mandaleen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-gray-300 hover:border-[#FF7A00] text-gray-700 hover:text-[#FF7A00] font-semibold px-8 py-4 text-lg group"
            >
              <a href="/#what-is-mandaleen">
                <Sparkles className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                What is Mandaleen?
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-[#FF7A00] to-[#FF4500] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}