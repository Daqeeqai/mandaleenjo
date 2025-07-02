"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { DivideIcon as LucideIcon } from "lucide-react"

interface MenuItem {
  icon: LucideIcon | React.FC
  label: string
  href: string
}

interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[]
  activeItem?: string
  onItemClick?: (label: string) => void
}

const itemVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.95 },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
}

const activeGlowVariants = {
  initial: { opacity: 1, scale: 1 },
  hover: { opacity: 1, scale: 1 },
}

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-1 rounded-xl bg-white/95 backdrop-blur-lg border border-gray-200/60 shadow-sm relative overflow-hidden",
          className,
        )}
        {...props}
      >
        <ul className="flex items-center gap-1 relative z-10">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = item.label === activeItem

            return (
              <motion.li key={item.label} className="relative">
                <button
                  onClick={() => onItemClick?.(item.label)}
                  className="block w-full"
                >
                  <motion.div
                    className="block rounded-lg overflow-hidden group relative"
                    whileHover="hover"
                    initial="initial"
                    variants={itemVariants}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF7A00] to-[#FF4500] rounded-lg"
                        variants={activeGlowVariants}
                        initial="initial"
                        animate="hover"
                      />
                    )}
                    
                    {/* Hover background */}
                    {!isActive && (
                      <motion.div
                        className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF7A00]/10 to-[#FF4500]/10 rounded-lg"
                        variants={glowVariants}
                      />
                    )}

                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 relative z-10 transition-colors duration-200 rounded-lg",
                        isActive
                          ? "text-white"
                          : "text-gray-600 group-hover:text-[#FF7A00]",
                      )}
                    >
                      <Icon className={cn(
                        "h-4 w-4 transition-colors duration-200",
                        isActive ? "text-white" : "text-gray-500 group-hover:text-[#FF7A00]"
                      )} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                  </motion.div>
                </button>
              </motion.li>
            )
          })}
        </ul>
      </motion.nav>
    )
  },
)

MenuBar.displayName = "MenuBar"