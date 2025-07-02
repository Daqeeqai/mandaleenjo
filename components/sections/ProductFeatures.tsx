'use client';

import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Globe, 
  FileText, 
  Calendar, 
  TrendingUp, 
  BarChart3,
  Upload,
  Smartphone,
  Rocket,
  Clock,
  Wifi,
  Users,
  Link,
  Target
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: MessageSquare,
    title: 'Omnichannel Chat',
    description: 'Connect Mandaleen to WhatsApp, Facebook, Instagram, and websites.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Globe,
    title: 'Arabic Fluency',
    description: 'Understands Modern Standard Arabic and local dialects (Jordanian, Egyptian, Gulf...).',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: FileText,
    title: 'Content Training',
    description: 'Upload FAQs, PDFs, or price lists—Mandaleen learns instantly.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Calendar,
    title: 'Bookings & Reminders',
    description: 'Automate scheduling and confirmations with calendar sync.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Leads & Sales',
    description: 'Capture, qualify, and convert leads automatically.',
    color: 'from-rose-500 to-red-500'
  },
  {
    icon: BarChart3,
    title: 'Smart Dashboard',
    description: 'Track every chat, response time, and customer flow in one place.',
    color: 'from-orange-500 to-yellow-500'
  }
];

const howItWorks = [
  {
    icon: Upload,
    title: 'Upload Your Info',
    description: 'FAQs, service details, pricing, booking rules.',
    color: 'from-[#FF7A00] to-[#FF4500]'
  },
  {
    icon: Smartphone,
    title: 'Pick Your Channels',
    description: 'Activate WhatsApp, Instagram, Facebook, or website.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Rocket,
    title: 'Go Live in 24 Hours',
    description: 'Your agent is ready—no technical setup needed.',
    color: 'from-green-500 to-emerald-500'
  }
];

const benefits = [
  {
    icon: Clock,
    title: 'Faster Replies',
    description: 'Under 3 seconds'
  },
  {
    icon: Wifi,
    title: '24/7 Support',
    description: 'Zero burnout'
  },
  {
    icon: Users,
    title: 'Native Arabic',
    description: 'Builds trust'
  },
  {
    icon: Link,
    title: 'Plug-and-Play',
    description: 'Easy integration'
  },
  {
    icon: Target,
    title: 'Measurable Results',
    description: 'From Day 1'
  }
];

export function ProductFeatures() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Key
            <span className="gradient-text"> Features</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Mandaleen is a smart, Arabic-first AI assistant designed for real businesses.
            It handles chats, replies in native dialects, and turns every message into a growth opportunity—day or night.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
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

        {/* How It Works Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How It <span className="gradient-text">Works</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{index + 1}. {step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* What You Get Section */}
        <motion.div
          className="mt-20 p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You <span className="gradient-text">Get</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}