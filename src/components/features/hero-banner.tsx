import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white rounded-2xl overflow-hidden">
      <div className="relative px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-sm mb-4 sm:mb-6">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>开启你的多语言学习之旅</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">用 LinguaLearn<br />掌握世界语言</h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-lg">支持英语、日语、韩语等多语种学习。智能学习路径、沉浸式练习、科学记忆曲线，让语言学习更高效。</p>
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-4">
            <Link href="/courses" className="w-full xs:w-auto">
              <Button size="lg" className="w-full xs:w-auto bg-white text-primary-600 hover:bg-white/90 shadow-lg">开始学习<ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Link href="/auth/register" className="w-full xs:w-auto">
              <Button size="lg" variant="outline" className="w-full xs:w-auto bg-primary-700/50 border-white/80 text-white hover:bg-primary-700 hover:border-white backdrop-blur-sm">免费注册</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}