import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { BookOpen } from 'lucide-react'

interface CourseCardProps {
  id: string
  title: string
  description: string
  thumbnail: string
  level: string
  language: string
  totalLessons: number
  progress?: number
}

const languageNames: Record<string, string> = { en: '英语', ja: '日语', ko: '韩语' }
const levelColors: Record<string, 'default' | 'secondary' | 'accent' | 'success' | 'outline'> = { A1: 'default', A2: 'secondary', B1: 'accent', B2: 'success', C1: 'outline', C2: 'outline' }

export function CourseCard({ id, title, description, thumbnail, level, language, totalLessons, progress }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group active:scale-[0.98]">
        <div className="relative h-32 sm:h-40 w-full bg-gray-100">
          <Image src={thumbnail} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3"><Badge variant={levelColors[level]} className="text-[10px] sm:text-xs">{level}</Badge></div>
        </div>
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2"><Badge variant="outline" className="text-[10px] sm:text-xs">{languageNames[language]}</Badge></div>
          <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 line-clamp-1">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-2 sm:mb-3">{description}</p>
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-400">
            <span className="flex items-center gap-1"><BookOpen className="h-2.5 w-2.5 sm:h-3 sm:w-3" />{totalLessons}课时</span>
          </div>
          {progress !== undefined && (
            <div className="mt-2 sm:mt-3">
              <div className="flex justify-between text-[10px] sm:text-xs mb-0.5 sm:mb-1">
                <span className="text-gray-500">学习进度</span>
                <span className="text-primary-500 font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-1 sm:h-1.5" />
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}