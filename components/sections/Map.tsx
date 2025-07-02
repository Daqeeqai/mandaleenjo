'use client';

import { motion } from 'framer-motion';

export function Map() {
  return (
    <section className="py-0">
      <motion.div
        className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Map Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Visit Our Office</h3>
            <p className="text-gray-600">14 Mecca Street, Amman, Jordan</p>
            <div className="mt-4 space-y-2">
              <a 
                href="tel:+962796660020" 
                className="block text-[#FF7A00] font-medium hover:text-[#FF4500] transition-colors duration-300"
              >
                📞 +962 79 666 0020
              </a>
              <a 
                href="mailto:hi@mandaleen.com" 
                className="block text-[#FF7A00] font-medium hover:text-[#FF4500] transition-colors duration-300"
              >
                ✉️ hi@mandaleen.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF4500]/10 rounded-full blur-xl" />
        <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-tl from-[#FF4500]/10 to-[#FF7A00]/10 rounded-full blur-xl" />
        
        {/* Office Marker */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-full shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}