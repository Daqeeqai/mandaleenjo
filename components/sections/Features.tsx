'use client';

import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Globe, 
  Users, 
  BarChart3, 
  Calendar, 
  Mic,
  Video,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: MessageSquare,
    title: 'Arabic AI Replies',
    description: 'Instant, natural replies in Arabic and dialects.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Social & WhatsApp Auto-Reply',
    description: '24/7 auto-responses on WhatsApp, Instagram, and more.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Users,
    title: 'Lead Capture & Booking',
    description: 'Qualify leads and book appointments automatically.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Insightful Dashboard',
    description: 'Real-time analytics on conversations and leads.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Mic,
    title: 'Voice AI',
    description: 'Talk to customers with natural voice AI.',
    color: 'from-rose-500 to-red-500'
  },
  {
    icon: Video,
    title: 'Video AI',
    description: 'Engage with interactive video agents.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Book appointments and send reminders.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Fast Responses',
    description: 'Instant replies for better satisfaction.',
    color: 'from-yellow-500 to-orange-500'
  }
];

export function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="what-is-mandaleen" className="scroll-mt-32 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            🧠 What is 
            <span className="gradient-text"> Mandaleen AI?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Mandaleen helps businesses reply faster, sell smarter, and support customers—all without lifting a finger.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF7A00] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your customer conversations?
          </p>
          <motion.button
            className="gradient-bg text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Free Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}