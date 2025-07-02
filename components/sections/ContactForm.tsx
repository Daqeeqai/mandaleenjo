'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to transform your business? Share your details and we'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="focus:border-[#FF7A00] focus:ring-[#FF7A00]"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="focus:border-[#FF7A00] focus:ring-[#FF7A00]"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                className="focus:border-[#FF7A00] focus:ring-[#FF7A00]"
                placeholder="Your Company"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="focus:border-[#FF7A00] focus:ring-[#FF7A00] resize-none"
                placeholder="Tell us about your project and how we can help..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
                isSubmitted
                  ? 'bg-green-500 hover:bg-green-500'
                  : 'gradient-bg gradient-hover'
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                <>
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
            <h3 className="font-semibold text-gray-900 mb-2">Prefer to call or message?</h3>
            <p className="text-gray-600 mb-4">
              Our team is available Sunday through Thursday, 9 AM to 6 PM, and Friday 9 AM to 2 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+962796660020" 
                className="text-[#FF7A00] font-semibold hover:text-[#FF4500] transition-colors duration-300"
              >
                📞 +962 79 666 0020
              </a>
              <a 
                href="https://wa.me/962796660020" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF7A00] font-semibold hover:text-[#FF4500] transition-colors duration-300 flex items-center"
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}