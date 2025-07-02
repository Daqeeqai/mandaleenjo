'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  'Free early-access onboarding',
  'Built with OpenAI & n8n workflows',
  'Arabic voice & text understanding',
  '24/7 multilingual support'
];

const techStack = [
  { name: 'OpenAI', logo: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=100&h=50' },
  { name: 'Google', logo: 'G' },
  { name: 'n8n', logo: 'n8n' },
  { name: 'Supabase', logo: 'S' },
  { name: 'Vercel', logo: 'V' }
];

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-white via-orange-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF4500]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-[#FF4500]/10 to-[#FF7A00]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#FF7A00]/5 to-transparent rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              Ready to Automate Conversations
              <br />
              <span className="gradient-text">with AI?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Power your business with Mandaleen's intelligent Arabic-first AI agents—built with the world's leading platforms.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <div key={feature} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="gradient-bg gradient-hover text-white font-semibold px-10 py-4 text-lg shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-[#FF7A00] text-gray-700 hover:text-[#FF7A00] font-semibold px-10 py-4 text-lg transition-all duration-300 group"
              asChild
            >
              <Link href="/about">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Who Are We?
              </Link>
            </Button>
          </motion.div>

          {/* Trusted Tech Stack */}
          <motion.div
            className="pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm mb-6">
              🛠️ Trusted Tech Stack
            </p>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center justify-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-[#FF7A00] group-hover:to-[#FF4500] transition-all duration-300 shadow-md group-hover:shadow-lg">
                    <span className="text-lg font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                      {tech.logo}
                    </span>
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-[#FF7A00] transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}