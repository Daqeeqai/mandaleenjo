'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, MessageSquare, Globe, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
	{
		icon: MessageSquare,
		text: 'Omnichannel Chat (WhatsApp, Facebook, Instagram)',
	},
	{
		icon: Globe,
		text: 'Arabic Fluency & Local Dialects',
	},
	{
		icon: FileText,
		text: 'Content Training & Smart Bookings',
	},
	{
		icon: TrendingUp,
		text: 'Leads & Sales Automation',
	},
];

export function ProductHero() {
	return (
		<section className="pt-32 pb-16 bg-gradient-to-br from-white via-orange-50/30 to-white overflow-hidden">
			<div className="container-custom">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
							Your AI Assistant for{' '}
							<span className="gradient-text">Customer Conversations</span>
					
						</h1>


						<div className="space-y-3 mb-10">
							{features.map((feature, index) => {
								const Icon = feature.icon;
								return (
									<motion.div
										key={feature.text}
										className="flex items-center space-x-3"
										initial={{ opacity: 0, x: -30 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
									>
										<div className="w-5 h-5 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded flex items-center justify-center">
											<Icon className="w-3 h-3 text-white" />
										</div>
										<span className="text-gray-700">{feature.text}</span>
									</motion.div>
								);
							})}
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button
								size="lg"
								className="gradient-bg gradient-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
								asChild
							>
								<Link href="/contact">
									Contact Us
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
								</Link>
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="border-2 border-gray-300 hover:border-[#FF7A00] text-gray-700 hover:text-[#FF7A00] font-semibold px-8 py-4 text-lg group"
								asChild
							>
								<a href="https://wa.me/962796660020" target="_blank" rel="noopener noreferrer">
									<Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
									WhatsApp Us
								</a>
							</Button>
						</div>
					</motion.div>

					{/* Visual */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
							<div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#FF7A00]/20 to-[#FF4500]/20 rounded-full blur-2xl" />
							<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[#FF4500]/20 to-[#FF7A00]/20 rounded-full blur-2xl" />

							<div className="relative z-10">
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
									<div className="flex items-center space-x-3 mb-4">
										<div className="w-3 h-3 bg-green-500 rounded-full" />
										<span className="text-white/80 text-sm">WhatsApp Business</span>
									</div>
									<div className="space-y-3">
										<div className="bg-white/20 rounded-lg p-3">
											<div className="text-white/90 text-sm">مرحبا! كيف يمكنني مساعدتك اليوم؟</div>
											<div className="text-white/60 text-xs mt-1">AI Agent • Now</div>
										</div>
										<div className="bg-[#FF7A00]/20 rounded-lg p-3">
											<div className="text-white/90 text-sm">أريد حجز موعد</div>
											<div className="text-white/60 text-xs mt-1">Customer • Now</div>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
										<div className="text-white/80 text-xs mb-2 flex items-center">
											<MessageSquare className="w-3 h-3 mr-1" />
											Instagram
										</div>
										<div className="h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded mb-2" />
										<div className="h-2 bg-white/30 rounded w-3/4" />
									</div>
									<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
										<div className="text-white/80 text-xs mb-2 flex items-center">
											<MessageSquare className="w-3 h-3 mr-1" />
											Facebook
										</div>
										<div className="h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded mb-2" />
										<div className="h-2 bg-white/30 rounded w-2/3" />
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}