'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, MessageSquare, Calendar, Video, ShoppingCart, Store, CreditCard, Mail, Target, Cloud, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const integrations = [
	{ name: 'WhatsApp Business', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
	{ name: 'Facebook Messenger', icon: MessageSquare, color: 'from-blue-500 to-indigo-500' },
	{ name: 'Instagram DMs', icon: MessageSquare, color: 'from-pink-500 to-purple-500' },
	{ name: 'Website Chat', icon: MessageSquare, color: 'from-cyan-500 to-blue-500' },
	{ name: 'Google Calendar', icon: Calendar, color: 'from-orange-500 to-red-500' },
	{ name: 'Zoom Meetings', icon: Video, color: 'from-indigo-500 to-purple-500' },
	{ name: 'Shopify', icon: ShoppingCart, color: 'from-green-500 to-teal-500' },
	{ name: 'WooCommerce', icon: Store, color: 'from-purple-500 to-pink-500' },
	{ name: 'Stripe Payments', icon: CreditCard, color: 'from-blue-500 to-cyan-500' },
	{ name: 'Mailchimp', icon: Mail, color: 'from-yellow-500 to-orange-500' },
	{ name: 'HubSpot CRM', icon: Target, color: 'from-orange-500 to-red-500' },
	{ name: 'Salesforce', icon: Cloud, color: 'from-blue-500 to-indigo-500' }
];

export function Integration() {
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
            Seamless
            <span className="gradient-text"> Integrations</span>
          </h2>
					<p className="text-xl text-gray-600 leading-relaxed mb-8">
            Connect Mandaleen with your favorite tools and platforms. 
            No technical setup required—just plug and play.
          </p>
				</motion.div>

				{/* Popular Integrations */}
				<div className="mb-12">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{integrations.slice(0, 4).map((integration, index) => {
							const Icon = integration.icon;
							return (
								<motion.div
									key={integration.name}
									className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.05 }}
								>
									<div className="text-center">
										<div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
											<Icon className="w-8 h-8 text-white" />
										</div>
										<h4 className="font-semibold text-gray-900 group-hover:text-[#FF7A00] transition-colors duration-300">
                      {integration.name}
                    </h4>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* All Integrations */}
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
					{integrations.slice(4).map((integration, index) => {
						const Icon = integration.icon;
						return (
							<motion.div
								key={integration.name}
								className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.05 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
							>
								<div className="text-center">
									<div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
										<Icon className="w-6 h-6 text-white" />
									</div>
									<h4 className="font-semibold text-gray-900 group-hover:text-[#FF7A00] transition-colors duration-300 text-sm">
                      {integration.name}
                    </h4>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Custom Integration CTA */}
				<motion.div
					className="text-center mt-16 p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-2xl flex items-center justify-center">
						<Settings className="w-8 h-8 text-white" />
					</div>
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Integration?
          </h3>
					<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team can build custom integrations for your specific business needs. 
            From CRM systems to payment gateways, we've got you covered.
          </p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button 
							className="gradient-bg gradient-hover text-white font-semibold px-6 py-3"
							asChild
						>
							<a href="https://wa.me/962796660020" target="_blank" rel="noopener noreferrer">
								<MessageSquare className="mr-2 h-4 w-4" />
              Request Custom Integration
							</a>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}