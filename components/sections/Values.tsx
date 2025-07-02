'use client';

import { motion } from 'framer-motion';
import { Heart, Globe, Lightbulb, Zap, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
	{
		icon: Heart,
		title: 'Customer Obsession',
		description:
			'We build tools that solve real problems for real people—every decision starts with the user.',
		color: 'from-red-500 to-pink-500',
	},
	{
		icon: Globe,
		title: 'Arabic-First, Always',
		description:
			'We proudly serve our region with native fluency in Modern Standard Arabic and local dialects.',
		color: 'from-green-500 to-emerald-500',
	},
	{
		icon: Lightbulb,
		title: 'Innovation with Purpose',
		description:
			"We don't follow trends—we create tools that redefine how businesses operate.",
		color: 'from-[#FF7A00] to-[#FF4500]',
	},
	{
		icon: Zap,
		title: 'Simplicity Wins',
		description:
			'AI should be invisible. Our agents work quietly in the background, creating powerful outcomes.',
		color: 'from-yellow-500 to-orange-500',
	},
	{
		icon: Shield,
		title: 'Trust by Design',
		description:
			'Security, transparency, and ethical AI are built into everything we deliver.',
		color: 'from-blue-500 to-indigo-500',
	},
	{
		icon: Users,
		title: 'Local Partnership',
		description:
			'We work closely with regional businesses and agencies to ensure authentic, effective solutions.',
		color: 'from-purple-500 to-violet-500',
	},
];

export function Values() {
	return (
		<section className="section-padding bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30">
			<div className="container-custom">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						💎 Our{' '}
						<span className="gradient-text">Values</span>
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed">
						The principles that guide everything we do and shape our company
						culture.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{values.map((value, index) => {
						const Icon = value.icon;
						return (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<Card className="h-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
									<CardContent className="p-8 text-center">
										<div
											className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
										>
											<Icon className="w-8 h-8 text-white" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FF7A00] transition-colors duration-300">
											{value.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{value.description}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}