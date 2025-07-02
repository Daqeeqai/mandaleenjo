'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Briefcase, RefreshCw, Handshake, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
		<section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF7A00]/5 to-[#FF4500]/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#FF4500]/5 to-[#FF7A00]/5 rounded-full blur-3xl" />
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
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
						Built for
						<span className="gradient-text"> Arabic Businesses</span>
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed">
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
								<div className="relative flex flex-col flex-1 justify-between p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 min-h-[220px] group-hover:border-[#FF7A00]/30">
									<div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 to-[#FF4500]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="relative z-10 flex flex-col items-center">
										<div
											className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF4500] shadow-lg group-hover:scale-110 transition-transform duration-300"
										>
											<Icon className="w-7 h-7 text-white" />
										</div>
										<h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#FF7A00] transition-colors duration-300">
											{stat.label}
										</h3>
										<p className="text-gray-600 text-sm">
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
					<p className="text-gray-600 text-lg mb-8">
						Ready to join our early access program and transform your customer
						conversations?
					</p>
					<Button
						size="lg"
						className="gradient-bg gradient-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
						asChild
					>
						<Link href="/contact">
							Book a Demo
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}