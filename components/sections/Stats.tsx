'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Briefcase, RefreshCw, Handshake, PhoneCall } from 'lucide-react';

const stats = [
	{
		icon: Briefcase,
		label: 'Built for SMEs',
		description: 'Arabic-first AI agents',
	},
	{
		icon: RefreshCw,
		label: 'Always Learning',
		description: 'Early access in progress',
	},
	{
		icon: Handshake,
		label: 'Clients Onboarding',
		description: 'Launching with local partners',
	},
	{
		icon: PhoneCall,
		label: 'Live Demo Ready',
		description: 'Try it in your dialect',
	},
];

export function Stats() {
	return (
		<section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF4500]/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#FF4500]/10 to-[#FF7A00]/10 rounded-full blur-3xl" />
			</div>

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<motion.div
					className="text-center max-w-3xl mx-auto mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
						Built for
						<span className="gradient-text"> Arabic Businesses</span>
					</h2>
					<p className="text-xl text-gray-300 leading-relaxed">
						Designed specifically for SMEs in the Middle East and Arabic-speaking
						markets.
					</p>
				</motion.div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<motion.div
								key={stat.label}
								className="text-center group flex flex-col h-full"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<div className="relative flex flex-col flex-1 justify-between p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl min-h-[220px]">
									<div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 to-[#FF4500]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="relative z-10 flex flex-col items-center">
										<div
											className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg group-hover:scale-110 transition-transform duration-300"
										>
											<Icon className="w-7 h-7 text-white" />
										</div>
										<h3 className="text-lg font-semibold text-white mb-1">
											{stat.label}
										</h3>
										<p className="text-gray-300 text-sm">
											{stat.description}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Bottom Section */}
				<motion.div
					className="text-center mt-16 max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<p className="text-gray-300 text-lg mb-8">
						Ready to join our early access program and transform your customer
						conversations?
					</p>
					<motion.button
						className="gradient-bg text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Request Early Access
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}