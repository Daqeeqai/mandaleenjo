'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, MessageSquare, CheckCircle, RefreshCw, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '14-day trial',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 100 conversations/month',
      'WhatsApp integration',
      'Basic Arabic responses',
      'Simple booking system',
      'Email support'
    ],
    popular: false,
    color: 'from-blue-500 to-indigo-500',
    cta: 'Start Free Trial',
    icon: CheckCircle
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Unlimited conversations',
      'All channel integrations',
      'Advanced Arabic dialects',
      'Smart lead capture',
      'Calendar sync & reminders',
      'Analytics dashboard',
      'Priority support'
    ],
    popular: true,
    color: 'from-[#FF7A00] to-[#FF4500]',
    cta: 'Get Started',
    icon: Star
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations with advanced needs',
    features: [
      'Everything in Professional',
      'Custom AI training',
      'Multi-location support',
      'Advanced integrations',
      'Dedicated account manager',
      'Custom reporting',
      'SLA guarantee'
    ],
    popular: false,
    color: 'from-purple-500 to-violet-500',
    cta: 'Contact Sales',
    icon: Target
  }
];

const additionalInfo = [
  {
    icon: CheckCircle,
    title: 'No Setup Fees',
    description: 'Get started immediately with zero upfront costs'
  },
  {
    icon: RefreshCw,
    title: 'Cancel Anytime',
    description: 'No long-term contracts or cancellation fees'
  },
  {
    icon: Target,
    title: '24/7 Support',
    description: 'Get help whenever you need it, in Arabic or English'
  }
];

export function Pricing() {
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
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Start free, scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF4500] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-[#FF7A00] shadow-2xl scale-105' : 'shadow-lg'} transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}>
                  <CardHeader className="text-center pb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} p-4 shadow-lg flex items-center justify-center`}>
                      <PlanIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full py-3 font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? 'gradient-bg gradient-hover text-white shadow-lg hover:shadow-xl' 
                          : 'border-2 border-gray-300 hover:border-[#FF7A00] text-gray-700 hover:text-[#FF7A00] bg-white'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200 max-w-2xl mx-auto">
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-4">
              We offer tailored packages for agencies, enterprises, and businesses with specific requirements.
            </p>
            <Button 
              variant="outline" 
              className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Our Sales Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}