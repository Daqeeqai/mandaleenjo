'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    contact: 'hi@mandaleen.com',
    action: 'mailto:hi@mandaleen.com',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm',
    contact: '+962 79 666 0020',
    action: 'tel:+962796660020',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick messaging support',
    contact: '+962 79 666 0020',
    action: 'https://wa.me/962796660020',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Headphones,
    title: 'Support Center',
    description: 'Browse our help articles',
    contact: 'Visit Help Center',
    action: '#',
    color: 'from-orange-500 to-red-500'
  }
];

const locations = [
  {
    city: 'Amman',
    address: '14 Mecca Street\nAmman\nJordan',
    isHQ: true
  }
];

export function ContactInfo() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We're here to help and answer any question you might have. 
            Choose the method that works best for you.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#FF7A00] transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {method.description}
                      </p>
                      <a
                        href={method.action}
                        target={method.action.startsWith('http') ? '_blank' : undefined}
                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#FF7A00] font-medium hover:text-[#FF4500] transition-colors duration-300"
                      >
                        {method.contact}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Our <span className="gradient-text">Office</span>
            </h3>
            <div className="space-y-6">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{location.city}</h4>
                        {location.isHQ && (
                          <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-[#FF7A00] to-[#FF4500] text-white rounded-full">
                            HQ
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 whitespace-pre-line">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            className="mt-12 p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl border border-orange-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                <div className="space-y-1 text-gray-600">
                  <div>Sunday - Thursday: 9:00 AM - 6:00 PM</div>
                  <div>Friday: 9:00 AM - 2:00 PM</div>
                  <div>Saturday: Closed</div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">WhatsApp Support:</span> Available 24/7
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}