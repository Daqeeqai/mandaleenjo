'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin as LinkedIn, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = [
	{ name: 'Features', href: '/product#features' },
	{ name: 'Contact Us', href: '/contact' },
	{ name: 'About Us', href: '/about' },
	{ name: 'Careers', href: '/careers' },
	{ name: 'Privacy Policy', href: '/privacy' },
	{ name: 'Terms of Service', href: '/terms' },
	{ name: 'Cookie Policy', href: '/cookies' },
	{ name: 'GDPR', href: '/gdpr' },
];

const socialLinks = [
	{ name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577583159694', icon: Facebook },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/company/mandaleen', icon: LinkedIn },
	{ name: 'Instagram', href: 'https://www.instagram.com/mandaleen.ai', icon: Instagram },
];

export function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			{/* Newsletter Section */}
			<div className="border-b border-gray-800">
				<div className="container-custom py-12">
					<motion.div
						className="max-w-2xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold mb-4">
							Stay Updated with <span className="gradient-text">Mandaleen</span>
						</h3>
						<p className="text-gray-400 mb-6">
							Get the latest updates, product announcements, and exclusive insights delivered to your inbox.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<Input
								type="email"
								placeholder="Enter your email"
								className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#FF7A00]"
							/>
							<Button className="gradient-bg gradient-hover px-6 py-2 font-medium">
								Subscribe
							</Button>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Main Footer Content */}
			<div className="container-custom py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Brand Section */}
					<div>
						<Link href="/" className="flex items-center space-x-2 mb-4 group">
							<div className="relative">
								<img src="/mandaleen-logo.png" alt="Mandaleen Logo" className="h-10 w-10 object-contain" />
							</div>
							<span className="text-2xl font-bold text-white">
								Mandaleen
							</span>
						</Link>
						<p className="text-gray-400 mb-6 max-w-sm">
							Revolutionizing the way businesses operate with cutting-edge technology solutions that drive innovation and growth.
						</p>
						<div className="space-y-2">
							<div className="flex items-center space-x-3 text-sm text-gray-400">
								<Mail className="h-4 w-4 text-[#FF7A00]" />
								<a href="mailto:hi@mandaleen.com" className="hover:text-[#FF7A00] transition-colors duration-300">
									hi@mandaleen.com
								</a>
							</div>
							<div className="flex items-center space-x-3 text-sm text-gray-400">
								<Phone className="h-4 w-4 text-[#FF7A00]" />
								<a href="tel:+962796660020" className="hover:text-[#FF7A00] transition-colors duration-300">
									+962 79 666 0020
								</a>
							</div>
							<div className="flex items-center space-x-3 text-sm text-gray-400">
								<MapPin className="h-4 w-4 text-[#FF7A00]" />
								<span>14 Mecca Street, Amman</span>
							</div>
						</div>
					</div>

					{/* Merged Links Section - Two Columns */}
					<div className="grid grid-cols-2 gap-4">
						<div>
							<h4 className="font-semibold mb-4">Quick Links</h4>
							<ul className="space-y-2">
								{footerLinks.slice(0, 4).map((link) => (
									<li key={link.name}>
										<Link href={link.href} className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-300 text-sm">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Legal</h4>
							<ul className="space-y-2">
								{footerLinks.slice(4).map((link) => (
									<li key={link.name}>
										<Link href={link.href} className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-300 text-sm">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Section */}
			<div className="border-t border-gray-800">
				<div className="container-custom py-6">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Mandaleen. All rights reserved.
						</p>
						<div className="flex items-center space-x-4">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-400 hover:text-[#FF7A00] transition-colors duration-300"
										aria-label={social.name}
									>
										<Icon className="h-5 w-5" />
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}