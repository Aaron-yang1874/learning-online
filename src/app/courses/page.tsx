'use client'

import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts/main-layout'
import { CourseCard } from '@/components/features/course-card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search } from 'lucide-react'

const courses = [
  { id: '1', title: '英语 A1 基础课程', description: '从零开始学习英语，掌握日常交流所需的基础词汇和语法', thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400', level: 'A1', language: 'en', totalLessons: 20, progress: 35 },
  { id: '2', title: '英语 A2 进阶课程', description: '在A1基础上提升，开始进行简单对话', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400', level: 'A2', language: 'en', totalLessons: 25, progress: 0 },
  { id: '3', title: '英语 B1 中级课程', description: '流利表达兴趣爱好，讨论时事话题', thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400', level: 'B1', language: 'en', totalLessons: 30, progress: 0 },
  { id: '4', title: '日语 N5 入门课程', description: '为零基础学员打造的日语入门课程', thumbnail: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400', level: 'A1', language: 'ja', totalLessons: 15, progress: 0 },
  { id: '5', title: '日语 N4 基础课程', description: '掌握基础语法和1500词汇', thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400', level: 'A2', language: 'ja', totalLessons: 20, progress: 0 },
  { id: '6', title: '韩语 TOPIK I 入门', description: '韩语零基础入门课程', thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', level: 'A1', language: 'ko', totalLessons: 12, progress: 0 },
]

const languages = ['全部', '英语', '日语', '韩语']
const levels = ['全部', 'A1', 'A2', 'B1', 'B2']

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [selectedLang, setSelectedLang] = useState('全部')
  const [selectedLevel, setSelectedLevel] = useState('全部')

  const langMap: Record<string, string> = { '英语': 'en', '日语': 'ja', '韩语': 'ko' }

  const filteredCourses = courses.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase())
    const matchLang = selectedLang === '全部' || course.language === langMap[selectedLang]
    const matchLevel = selectedLevel === '全部' || course.level === selectedLevel
    return matchSearch && matchLang && matchLevel
  })

  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">课程中心</h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="搜索课程..." className="pl-10 h-10 sm:h-11" value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {languages.map((lang) => (
            <Badge key={lang} variant={selectedLang === lang ? 'default' : 'outline'} className="cursor-pointer text-xs sm:text-sm px-2 sm:px-2.5 py-0.5" onClick={() => setSelectedLang(lang)}>{lang}</Badge>
          ))}
          <div className="w-px h-5 sm:h-6 bg-gray-200 mx-1 sm:mx-2" />
          {levels.map((level) => (
            <Badge key={level} variant={selectedLevel === level ? 'secondary' : 'outline'} className="cursor-pointer text-xs sm:text-sm px-2 sm:px-2.5 py-0.5" onClick={() => setSelectedLevel(level)}>{level}</Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {filteredCourses.map((course) => <CourseCard key={course.id} {...course} />)}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-sm sm:text-base text-gray-500">未找到符合条件的课程</p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}