'use client';

import { motion } from 'framer-motion';
import { Play, MessageSquare, Calendar, BarChart3, Bot, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const demoFeatures = [
	{
		icon: Bot,
		title: 'Smart AI Responses',
		description: 'Contextual replies in perfect Arabic that feel natural and helpful.',
	},
	{
		icon: Calendar,
		title: 'Automated Booking',
		description: 'Schedule appointments and send confirmations without human intervention.',
	},
	{
		icon: BarChart3,
		title: 'Real-time Analytics',
		description: 'Track performance, leads, and customer satisfaction in one dashboard.',
	},
];

export function ProductDemo() {
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
						See Mandaleen in <span className="gradient-text">Action</span>
					</h2>
					<p className="text-xl text-gray-600 leading-relaxed mb-8">
						Watch how our AI agents handle real customer conversations in Arabic,
						book appointments, and drive sales—all automatically.
					</p>
					<Button
						size="lg"
						className="gradient-bg gradient-hover text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
						asChild
					>
						<a href="/contact">
							<Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
							Book a Demo
						</a>
					</Button>
				</motion.div>

				<motion.div
					className="relative max-w-6xl mx-auto"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					{/* Main Demo Screen */}
					<div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
						<div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#FF7A00]/20 to-[#FF4500]/20 rounded-full blur-2xl" />
						<div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-[#FF4500]/20 to-[#FF7A00]/20 rounded-full blur-2xl" />

						<div className="relative z-10">
							{/* Browser Header */}
							<div className="flex items-center space-x-3 mb-6">
								<div className="w-3 h-3 bg-red-500 rounded-full" />
								<div className="w-3 h-3 bg-yellow-500 rounded-full" />
								<div className="w-3 h-3 bg-green-500 rounded-full" />
								<div className="flex-1 bg-white/10 rounded-lg px-4 py-2 ml-4">
									<div className="text-white/60 text-sm">
										dashboard.mandaleen.ai
									</div>
								</div>
							</div>

							{/* Demo Content */}
							<div className="bg-white rounded-xl p-6 min-h-96">
								<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
									{/* Chat Interface */}
									<div className="lg:col-span-2 space-y-4">
										<div className="bg-gray-50 rounded-lg p-4">
											<h3 className="font-semibold text-gray-900 mb-3 flex items-center">
												<MessageSquare className="w-5 h-5 mr-2 text-green-500" />
												Live Conversations
											</h3>
											<div className="space-y-3">
												<div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
													<div className="text-sm text-gray-600">
														WhatsApp • Customer
													</div>
													<div className="text-gray-900">
														مرحبا، أريد حجز موعد للغد
													</div>
												</div>
												<div className="bg-orange-50 rounded-lg p-3 border-l-4 border-orange-500">
													<div className="text-sm text-gray-600">
														AI Agent • 2 sec ago
													</div>
													<div className="text-gray-900">
														أهلاً وسهلاً! يمكنني مساعدتك في حجز موعد. ما هو
														الوقت المفضل لديك؟
													</div>
												</div>
											</div>
										</div>

										<div className="grid grid-cols-2 gap-4">
											<div className="bg-blue-50 rounded-lg p-4">
												<Calendar className="w-6 h-6 text-blue-500 mb-2" />
												<div className="text-sm font-semibold text-gray-900">
													Today's Bookings
												</div>
												<div className="text-2xl font-bold text-blue-600">
													12
												</div>
											</div>
											<div className="bg-green-50 rounded-lg p-4">
												<Clock className="w-6 h-6 text-green-500 mb-2" />
												<div className="text-sm font-semibold text-gray-900">
													Response Time
												</div>
												<div className="text-2xl font-bold text-green-600">
													2.1s
												</div>
											</div>
										</div>
									</div>

									{/* Sidebar */}
									<div className="space-y-4">
										<div className="bg-gradient-to-r from-[#FF7A00] to-[#FF4500] rounded-lg p-4 text-white">
											<h4 className="font-semibold mb-2">Active Channels</h4>
											<div className="space-y-2 text-sm">
												<div className="flex items-center">
													<MessageSquare className="w-4 h-4 mr-2" />
													WhatsApp Business
												</div>
												<div className="flex items-center">
													<MessageSquare className="w-4 h-4 mr-2" />
													Facebook Messenger
												</div>
												<div className="flex items-center">
													<MessageSquare className="w-4 h-4 mr-2" />
													Instagram DMs
												</div>
												<div className="flex items-center">
													<MessageSquare className="w-4 h-4 mr-2" />
													Website Chat
												</div>
											</div>
										</div>

										<div className="bg-gray-50 rounded-lg p-4">
											<h4 className="font-semibold text-gray-900 mb-3">
												Quick Stats
											</h4>
											<div className="space-y-2 text-sm">
												<div className="flex justify-between">
													<span>Messages Today</span>
													<span className="font-semibold">247</span>
												</div>
												<div className="flex justify-between">
													<span>Leads Captured</span>
													<span className="font-semibold">18</span>
												</div>
												<div className="flex justify-between">
													<span>Bookings Made</span>
													<span className="font-semibold">12</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Demo Features */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					{demoFeatures.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={feature.title}
								className="text-center p-6 bg-white rounded-xl shadow-lg"
							>
								<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#FF7A00] to-[#FF4500] rounded-2xl flex items-center justify-center">
									<Icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="font-bold text-gray-900 mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}