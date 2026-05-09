import React from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/main-layout'
import { HeroBanner } from '@/components/features/hero-banner'
import { CourseCard } from '@/components/features/course-card'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Flame, Target, Trophy, Users, BookOpen } from 'lucide-react'

const featuredCourses = [
  { id: '1', title: '英语 A1 基础课程', description: '从零开始学习英语，掌握日常交流所需的基础词汇和语法', thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400', level: 'A1', language: 'en', totalLessons: 20, progress: 35 },
  { id: '2', title: '日语 N5 入门课程', description: '为零基础学员打造的日语入门课程', thumbnail: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400', level: 'A1', language: 'ja', totalLessons: 15, progress: 0 },
  { id: '3', title: '韩语 TOPIK I 入门', description: '韩语零基础入门课程', thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', level: 'A1', language: 'ko', totalLessons: 12, progress: 0 },
]

const stats = [
  { icon: Users, label: '活跃学员', value: '10,000+' },
  { icon: BookOpen, label: '课程数量', value: '100+' },
  { icon: Trophy, label: '学习语言', value: '8+' },
]

export default function HomePage() {
  return (
    <MainLayout>
      <div className="pb-16 md:pb-0 space-y-4 sm:space-y-6">
        <HeroBanner />

        <Card>
          <CardContent className="p-3 sm:p-4">
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex items-center gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 sm:h-5 sm:w-5 text-primary-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg sm:text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 sm:p-4">
            <section>
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 mb-4">
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">推荐课程</h2>
                <Link href="/courses">
                  <Button variant="ghost" size="sm" className="text-primary-500 text-xs sm:text-sm">查看全部<ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" /></Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {featuredCourses.map((course) => <CourseCard key={course.id} {...course} />)}
              </div>
            </section>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 sm:p-4">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 sm:p-6 text-white">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center"><Target className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">今日学习目标</h3>
                    <p className="text-white/80 text-xs sm:text-sm">完成15分钟学习</p>
                  </div>
                </div>
                <div className="h-1.5 sm:h-2 bg-white/30 rounded-full overflow-hidden mb-2 sm:mb-3"><div className="h-full w-1/3 bg-white rounded-full" /></div>
                <p className="text-xs sm:text-sm text-white/80">已学习 5/15 分钟</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 sm:p-6 text-white">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center"><Flame className="h-5 w-5 sm:h-6 sm:w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">连续学习</h3>
                    <p className="text-white/80 text-xs sm:text-sm">保持你的学习习惯</p>
                  </div>
                </div>
                <div className="flex gap-1.5 sm:gap-2">
                  {[1, 1, 1, 1, 1, 1, 0].map((done, i) => (
                    <div key={i} className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium ${done ? 'bg-white text-orange-500' : 'bg-white/20 text-white/60'}`}>
                      {done ? '✓' : i + 1}
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 mt-2 sm:mt-3">连续学习 6 天</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}