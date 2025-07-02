'use client';

import { motion } from 'framer-motion';

const companies = [
  { name: 'Microsoft', logo: 'M' },
  { name: 'Google', logo: 'G' },
  { name: 'Amazon', logo: 'A' },
  { name: 'Apple', logo: 'A' },
  { name: 'Meta', logo: 'M' },
  { name: 'Netflix', logo: 'N' },
  { name: 'Tesla', logo: 'T' },
  { name: 'Spotify', logo: 'S' },
  { name: 'Uber', logo: 'U' },
  { name: 'Airbnb', logo: 'A' },
  { name: 'Slack', logo: 'S' },
  { name: 'Zoom', logo: 'Z' }
];

export function CustomerLogos() {
  return (
    <section className="section-padding bg-white border-b border-gray-100">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-gray-600">
            Join thousands of companies that rely on Mandaleen for their business transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:from-[#FF7A00] group-hover:to-[#FF4500] transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-2xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                  {company.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            And 10,000+ more companies worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}