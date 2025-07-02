'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Globe, Award, Zap } from 'lucide-react';

const timelineEvents = [
	{
		year: '2023',
		title: 'Idea Born',
		description:
			'Frustrated by long wait times and disconnected service channels, we set out to build the first Arabic-native AI assistant for local businesses.',
		icon: Lightbulb,
		color: 'from-yellow-500 to-orange-500',
		emoji: '🧠',
	},
	{
		year: 'Early 2024',
		title: 'MVP Launched',
		description:
			'We built our first WhatsApp AI agent and ran pilots with clinics and e-commerce stores in Jordan.',
		icon: Rocket,
		color: 'from-blue-500 to-indigo-500',
		emoji: '🛠',
	},
	{
		year: 'Mid 2024',
		title: 'First Partners Onboarded',
		description:
			'Local agencies, digital marketers, and software firms began bundling Mandaleen into their offerings.',
		icon: Users,
		color: 'from-green-500 to-emerald-500',
		emoji: '🤝',
	},
	{
		year: '2025',
		title: 'Platform Launch',
		description:
			'We launched the full Mandaleen Dashboard—connecting WhatsApp, Instagram, Facebook, and websites in one AI-powered hub.',
		icon: Globe,
		color: 'from-[#FF7A00] to-[#FF4500]',
		emoji: '🚀',
	},
	{
		year: 'Next',
		title: 'Expansion',
		description:
			'Our goal is to serve 10,000+ SMEs across the Arab world—one smart conversation at a time.',
		icon: Zap,
		color: 'from-purple-500 to-violet-500',
		emoji: '🌍',
	},
];

export function Timeline() {
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
						📈 Our{' '}
						<span className="gradient-text">Journey</span>
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed">
						From idea to impact - building the future of Arabic AI for business.
					</p>
				</motion.div>

				<div className="relative">
					{/* Timeline Line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF7A00] to-[#FF4500] rounded-full hidden lg:block" />

					<div className="space-y-12">
						{timelineEvents.map((event, index) => {
							const Icon = event.icon;
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={event.year}
									className={`flex items-center ${
										isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
									} flex-col lg:space-x-8`}
									initial={{ opacity: 0, x: isEven ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									{/* Content */}
									<div
										className={`flex-1 ${
											isEven ? 'lg:text-right' : 'lg:text-left'
										} text-center lg:mb-0 mb-8`}
									>
										<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
											<div className="flex items-center justify-center lg:hidden mb-4">
												<div className="text-3xl">{event.emoji}</div>
											</div>
											<div className="text-2xl font-bold gradient-text mb-2">
												{event.emoji} {event.year}
											</div>
											<h3 className="text-xl font-bold text-gray-900 mb-3">
												{event.title}
											</h3>
											<p className="text-gray-600 leading-relaxed">
												{event.description}
											</p>
										</div>
									</div>

									{/* Timeline Icon */}
									<div className="relative z-10 hidden lg:block">
										<div
											className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} p-4 shadow-lg border-4 border-white flex items-center justify-center`}
										>
											<span className="text-2xl">{event.emoji}</span>
										</div>
									</div>

									{/* Spacer for alternating layout */}
									<div className="flex-1 hidden lg:block" />
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* Call to Action */}
				<motion.div
					className="text-center mt-16 p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl border border-orange-200"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<h3 className="text-2xl font-bold text-gray-900 mb-4">
						🚀 Ready to Join Our Journey?
					</h3>
					<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
						Be part of the next chapter as we revolutionize customer conversations
						across the Arab world with intelligent AI agents.
					</p>
					<motion.button
						className="gradient-bg text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() =>
							window.open('https://wa.me/962796660020', '_blank')
						}
					>
						Book Your Free Demo
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}