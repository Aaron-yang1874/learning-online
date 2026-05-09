'use client'

import React from 'react'
import { MainLayout } from '@/components/layouts/main-layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Settings, Bell, HelpCircle, LogOut, Award, Flame, BookOpen, Clock } from 'lucide-react'

const userStats = [
  { icon: Flame, label: '连续学习', value: '7天', color: 'text-orange-500', bgColor: 'bg-orange-100' },
  { icon: Clock, label: '累计学习', value: '20小时', color: 'text-blue-500', bgColor: 'bg-blue-100' },
  { icon: BookOpen, label: '完成课程', value: '5门', color: 'text-green-500', bgColor: 'bg-green-100' },
  { icon: Award, label: '获得成就', value: '8个', color: 'text-purple-500', bgColor: 'bg-purple-100' },
]

const menuItems = [
  { icon: Bell, label: '消息通知', href: '/profile/notifications' },
  { icon: Settings, label: '账号设置', href: '/profile/settings' },
  { icon: HelpCircle, label: '帮助中心', href: '/profile/help' },
]

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" />
              <AvatarFallback className="text-xl">U</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-gray-900">学习达人</h1>
            <p className="text-gray-500">Level A2 · 英语学习者</p>
            <Badge variant="accent" className="mt-2">连续学习 7 天</Badge>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            {userStats.map((stat) => {
              const Icon = stat.icon
              return (
                <Card key={stat.label}>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className={`h-10 w-10 rounded-full ${stat.bgColor} flex items-center justify-center mb-2`}>
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">学习进度</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">英语 A1 基础课程</span>
                    <span className="text-primary-500 font-medium">65%</span>
                  </div>
                  <Progress value={65} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">日语 N5 入门课程</span>
                    <span className="text-primary-500 font-medium">45%</span>
                  </div>
                  <Progress value={45} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">韩语 TOPIK I 入门</span>
                    <span className="text-primary-500 font-medium">20%</span>
                  </div>
                  <Progress value={20} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">账号管理</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button key={item.label} className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Icon className="h-5 w-5 text-gray-500" />
                    <span className="text-left">{item.label}</span>
                  </button>
                )
              })}
              <div className="border-t border-gray-100 mt-2 pt-2">
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-red-500">
                  <LogOut className="h-5 w-5" />
                  <span>退出登录</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}