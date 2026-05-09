'use client'

import React from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/main-layout'
import { ProgressRing } from '@/components/features/progress-ring'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Headphones, Mic, PenTool, Flame } from 'lucide-react'

const learningModules = [
  { icon: BookOpen, title: '单词记忆', description: '智能闪卡复习', color: 'bg-blue-500', href: '/learn/vocabulary' },
  { icon: PenTool, title: '语法练习', description: '多种题型训练', color: 'bg-purple-500', href: '/learn/grammar' },
  { icon: Headphones, title: '听力训练', description: '提升听力理解', color: 'bg-green-500', href: '/learn/listening' },
  { icon: Mic, title: '口语跟读', description: 'AI 发音评测', color: 'bg-orange-500', href: '/learn/speaking' },
]

const recentLessons = [
  { id: '1', title: '你好 Hello', course: '英语 A1', progress: 80, language: 'en' },
  { id: '2', title: 'あ行假名', course: '日语 N5', progress: 45, language: 'ja' },
  { id: '3', title: '韩文字母', course: '韩语入门', progress: 20, language: 'ko' },
]

export default function LearnPage() {
  const todayMinutes = 20
  const dailyGoal = 30

  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">学习中心</h1>
          <Badge variant="accent" className="flex items-center gap-1"><Flame className="h-3 w-3" />连续学习 7 天</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-1">
            <CardContent className="flex flex-col items-center py-6">
              <h3 className="text-sm font-medium text-gray-500 mb-4">今日进度</h3>
              <ProgressRing progress={(todayMinutes / dailyGoal) * 100} />
              <p className="text-sm text-gray-500 mt-4">{todayMinutes} / {dailyGoal} 分钟</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader><CardTitle className="text-lg">本周学习</CardTitle></CardHeader>
            <CardContent>
              <div className="flex items-end justify-between h-32 gap-2">
                {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, i) => {
                  const heights = [45, 30, 60, 15, 45, 0, 20]
                  const max = Math.max(...heights)
                  return (
                    <div key={day} className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-full bg-gray-100 rounded-t-lg relative" style={{ height: '100%' }}>
                        <div className="absolute bottom-0 w-full bg-primary-500 rounded-t-lg transition-all" style={{ height: `${(heights[i] / max) * 100}%` }} />
                      </div>
                      <span className="text-xs text-gray-500">{day}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">学习模块</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {learningModules.map((module) => (
            <Link key={module.title} href={module.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className={`h-12 w-12 rounded-lg ${module.color} flex items-center justify-center mb-3`}>
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{module.title}</h3>
                  <p className="text-sm text-gray-500">{module.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">最近学习</h2>
        <div className="space-y-3">
          {recentLessons.map((lesson) => (
            <Card key={lesson.id}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center text-lg font-bold text-primary-500">
                    {lesson.language === 'en' ? 'A' : lesson.language === 'ja' ? 'あ' : 'ㄱ'}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                    <p className="text-sm text-gray-500">{lesson.course}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 hidden sm:block">
                    <Progress value={lesson.progress} />
                  </div>
                  <Link href={`/learn/${lesson.id}`}>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}