'use client'

import React from 'react'
import { MainLayout } from '@/components/layouts/main-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Flame, Award, Book, Crown, Trophy } from 'lucide-react'

const achievements = [
  { id: '1', code: 'first_lesson', title: '初次学习', description: '完成第一节课', icon: Star, unlocked: true, category: 'learning' },
  { id: '2', code: 'streak_7', title: '连续7天', description: '连续学习7天', icon: Flame, unlocked: true, category: 'learning' },
  { id: '3', code: 'streak_30', title: '连续30天', description: '连续学习30天', icon: Crown, unlocked: false, category: 'learning' },
  { id: '4', code: 'vocab_100', title: '词汇达人', description: '掌握100个单词', icon: Book, unlocked: true, category: 'vocabulary' },
  { id: '5', code: 'vocab_500', title: '词汇专家', description: '掌握500个单词', icon: Award, unlocked: false, category: 'vocabulary' },
  { id: '6', code: 'study_10h', title: '学习达人', description: '累计学习10小时', icon: Trophy, unlocked: false, category: 'learning' },
]

const categories = ['全部', '学习', '词汇']

export default function AchievementsPage() {
  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length

  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">成就系统</h1>
          <Badge variant="secondary">{unlockedCount}/{totalCount} 已解锁</Badge>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <Badge key={cat} variant="outline" className="cursor-pointer">{cat}</Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <Card key={achievement.id} className={achievement.unlocked ? '' : 'opacity-50'}>
                <CardContent className="p-4 text-center">
                  <div className={`h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center ${achievement.unlocked ? 'bg-primary-100' : 'bg-gray-100'}`}>
                    <Icon className={`h-8 w-8 ${achievement.unlocked ? 'text-primary-500' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                  {!achievement.unlocked && (
                    <div className="mt-3 text-xs text-gray-400">继续努力解锁</div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}