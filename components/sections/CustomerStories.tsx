'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stories = [
  {
    company: 'TechCorp',
    industry: 'Technology',
    challenge: 'Scaling operations across multiple time zones',
    solution: 'Implemented our collaboration platform with real-time sync',
    result: '300% increase in team productivity and 50% reduction in project delivery time',
    quote: 'Mandaleen transformed how we work. Our global teams are now more connected than ever.',
    author: 'Sarah Johnson, CEO',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    company: 'GrowthCo',
    industry: 'E-commerce',
    challenge: 'Managing inventory across 50+ locations',
    solution: 'Deployed our analytics platform with predictive insights',
    result: '40% reduction in inventory costs and 99.9% order accuracy',
    quote: 'The insights we get from Mandaleen have revolutionized our inventory management.',
    author: 'Michael Chen, COO',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-emerald-500'
  },
  {
    company: 'InnovateLab',
    industry: 'Healthcare',
    challenge: 'Ensuring compliance while maintaining agility',
    solution: 'Integrated our security-first platform with compliance automation',
    result: '100% compliance rate and 60% faster product development cycles',
    quote: 'Mandaleen gave us the confidence to innovate while staying compliant.',
    author: 'Dr. Emily Rodriguez, CTO',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-violet-500'
  }
];

export function CustomerStories() {
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
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real companies, real challenges, real results. See how our customers are achieving extraordinary outcomes.
          </p>
        </motion.div>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.company}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6">
                  <span className="text-sm font-semibold text-[#FF7A00] uppercase tracking-wide">
                    {story.industry}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                    {story.company}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Result</h4>
                    <p className="text-gray-600 font-medium">{story.result}</p>
                  </div>
                </div>

                <Card className="mt-8 border-l-4 border-l-[#FF7A00] shadow-lg">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-[#FF7A00] mb-4" />
                    <p className="text-lg text-gray-700 italic mb-4">
                      "{story.quote}"
                    </p>
                    <p className="font-semibold text-gray-900">
                      {story.author}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/20 to-[#FF4500]/20 rounded-3xl transform rotate-3" />
                  <img
                    src={story.image}
                    alt={`${story.company} office`}
                    className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${story.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <div className="text-white font-bold text-lg">
                      {story.company.charAt(0)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="gradient-bg gradient-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Read More Success Stories
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}