'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, GraduationCap, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const navItems = [
  { href: '/', label: '首页', icon: Home },
  { href: '/courses', label: '课程', icon: BookOpen },
  { href: '/learn', label: '学习', icon: GraduationCap },
  { href: '/community', label: '社区', icon: Users },
]

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 safe-area-inset-top">
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-primary-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">L</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900">LinguaLearn</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href} className={cn('flex items-center gap-1.5 sm:gap-2 text-sm font-medium transition-colors relative', isActive ? 'text-primary-500' : 'text-gray-600 hover:text-gray-900')}>
                  <Icon className="h-4 w-4" />
                  {item.label}
                  {isActive && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary-500" />}
                </Link>
              )
            })}
          </nav>

          <Link href="/profile">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50 safe-area-inset-bottom">
        <div className="flex justify-around py-1.5 sm:py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href} className={cn('flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs min-h-[48px] justify-center', isActive ? 'text-primary-500' : 'text-gray-500')}>
                <Icon className="h-5 w-5 sm:h-5 sm:w-5" />
                <span className="truncate max-w-[60px]">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}