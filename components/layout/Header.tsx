'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Product', href: '/product' },
	{ name: 'Contact', href: '/contact' },
];

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={cn(
				'fixed top-0 w-full z-50 transition-all duration-300',
				scrolled
					? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
					: 'bg-transparent'
			)}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<nav className="container-custom">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2 group">
						<div className="relative">
							<img
								src="/mandaleen-logo.png"
								alt="Mandaleen Logo"
								className="h-8 w-8 object-contain"
							/>
						</div>
						<span className="text-2xl font-bold" style={{ color: '#181818' }}>
							Mandaleen
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									'relative text-sm font-medium transition-colors duration-300 hover:text-[#FF7A00] focus-ring rounded-md px-3 py-2',
									pathname === item.href
										? 'text-[#FF7A00]'
										: 'text-gray-700 hover:text-[#FF7A00]'
								)}
							>
								{item.name}
								{pathname === item.href && (
									<motion.div
										className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg rounded-full"
										layoutId="navbar-indicator"
										transition={{ type: 'spring', stiffness: 350, damping: 30 }}
									/>
								)}
							</Link>
						))}
					</div>

					{/* CTA Button */}
					<div className="hidden lg:block">
						<Button
							className="font-medium px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
							asChild
						>
							<a
								href="https://wa.me/962796660020"
								target="_blank"
								rel="noopener noreferrer"
							>
								WhatsApp Us
							</a>
						</Button>
					</div>

					{/* Mobile menu button */}
					<button
						className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#FF7A00] focus-ring"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="lg:hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/50">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={cn(
											'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300',
											pathname === item.href
												? 'text-[#FF7A00] bg-orange-50'
												: 'text-gray-700 hover:text-[#FF7A00] hover:bg-gray-50'
										)}
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								))}
								<div className="pt-2">
									<Button className="w-full font-medium shadow-lg" asChild>
										<a
											href="https://wa.me/962796660020"
											target="_blank"
											rel="noopener noreferrer"
										>
											WhatsApp Us
										</a>
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	);
}