'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, TrendingUp, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'Fortune 500 Retail Chain Transformation',
    company: 'Global Retail Corp',
    industry: 'Retail',
    duration: '6 months',
    teamSize: '500+ employees',
    improvement: '250% ROI',
    description: 'How a major retail chain streamlined operations across 1,000+ stores using our platform.',
    highlights: [
      'Reduced inventory costs by 35%',
      'Improved customer satisfaction by 40%',
      'Decreased operational overhead by 25%'
    ],
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Healthcare Network Digital Revolution',
    company: 'MedCare Systems',
    industry: 'Healthcare',
    duration: '8 months',
    teamSize: '1,200+ staff',
    improvement: '180% efficiency gain',
    description: 'Transforming patient care delivery across a network of 50+ healthcare facilities.',
    highlights: [
      'Reduced patient wait times by 60%',
      'Improved care coordination by 80%',
      'Enhanced data security compliance'
    ],
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Fintech Startup Scaling Success',
    company: 'PayFlow Technologies',
    industry: 'Financial Services',
    duration: '4 months',
    teamSize: '150+ developers',
    improvement: '400% growth support',
    description: 'Supporting rapid growth from startup to unicorn status with scalable infrastructure.',
    highlights: [
      'Handled 10x transaction volume increase',
      'Maintained 99.99% uptime during growth',
      'Reduced development cycle time by 50%'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-violet-500'
  }
];

export function CaseStudies() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            In-Depth <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Detailed analysis of how our solutions drive measurable business outcomes across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF7A00] transition-colors duration-300 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {study.company}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-[#FF7A00] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{study.duration}</div>
                      <div className="text-xs text-gray-600">Duration</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-[#FF7A00] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{study.teamSize}</div>
                      <div className="text-xs text-gray-600">Team Size</div>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-5 h-5 text-[#FF7A00] mx-auto mb-1" />
                      <div className="text-sm font-semibold text-gray-900">{study.improvement}</div>
                      <div className="text-xs text-gray-600">Impact</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {study.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#FF7A00] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-gray-300 hover:border-[#FF7A00] text-gray-700 hover:text-[#FF7A00] group/btn"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
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
          <p className="text-gray-600 mb-6">
            Want to see how Mandaleen can transform your business?
          </p>
          <Button 
            size="lg"
            className="gradient-bg gradient-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Schedule a Custom Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}