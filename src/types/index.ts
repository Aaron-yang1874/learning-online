export interface User {
  id: string
  email: string
  nickname: string
  avatar?: string
  level: string
  streakDays: number
  totalMinutes: number
  languages: string[]
}

export interface Course {
  id: string
  language: string
  title: string
  description: string
  thumbnail: string
  level: string
  totalLessons: number
  progress?: number
}

export interface Lesson {
  id: string
  title: string
  type: 'vocabulary' | 'grammar' | 'listening' | 'speaking' | 'reading' | 'writing'
  estimatedMinutes: number
}

export interface VocabularyItem {
  word: string
  meaning: string
  pronunciation: string
  exampleSentence?: string
}

export interface Achievement {
  id: string
  code: string
  title: string
  description: string
  icon: string
  category: string
  unlocked: boolean
}

export interface Post {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  language: string
  likes: number
  comments: number
  time: string
}

export interface DailyProgress {
  date: string
  minutes: number
  lessonsCompleted: number
  wordsReviewed: number
  accuracy: number
}