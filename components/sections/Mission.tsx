'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Zap } from 'lucide-react';

export function Mission() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🌍 Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <strong>To make AI simple, local, and accessible.</strong>
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We help business owners and teams in the Arab world deliver faster support, 
              smarter sales, and unforgettable customer service—powered by technology that 
              <em> feels human</em>.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Human-Centered AI</h4>
                  <p className="text-gray-600">Technology that enhances human connections, not replaces them.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Local Understanding</h4>
                  <p className="text-gray-600">Deep cultural knowledge and linguistic expertise for the Arab world.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instant Impact</h4>
                  <p className="text-gray-600">Solutions that deliver immediate results and measurable business growth.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 overflow-hidden">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#FF7A00]/20 to-[#FF4500]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[#FF4500]/20 to-[#FF7A00]/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center">
                <img src="/mandaleen-logo.png" alt="Mandaleen Logo" className="mx-auto mb-6 h-16 w-16 object-contain" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  AI That Speaks Your Language
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI agents understand not just Arabic, but the cultural nuances 
                  and business practices that matter to your customers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}