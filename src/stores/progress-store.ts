import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DailyProgress {
  date: string
  minutes: number
  lessonsCompleted: number
  wordsReviewed: number
  accuracy: number
}

interface ProgressState {
  todayMinutes: number
  dailyGoal: number
  streakDays: number
  weeklyProgress: DailyProgress[]
  addMinutes: (minutes: number) => void
  completeLesson: () => void
  setDailyGoal: (goal: number) => void
  getTodayProgress: () => number
}

const getWeekDates = () => {
  const dates: string[] = []
  for (let i = 6; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    dates.push(date.toISOString().split('T')[0])
  }
  return dates
}

const mockWeeklyProgress: DailyProgress[] = getWeekDates().map((date, i) => ({
  date,
  minutes: [45, 30, 60, 15, 45, 0, 20][i],
  lessonsCompleted: [2, 1, 3, 1, 2, 0, 1][i],
  wordsReviewed: [20, 15, 30, 10, 25, 0, 15][i],
  accuracy: [85, 78, 90, 65, 88, 0, 80][i],
}))

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      todayMinutes: 20,
      dailyGoal: 30,
      streakDays: 7,
      weeklyProgress: mockWeeklyProgress,

      addMinutes: (minutes: number) => { set((state) => ({ todayMinutes: state.todayMinutes + minutes })) },
      completeLesson: () => { set((state) => ({ streakDays: state.streakDays + 1 })) },
      setDailyGoal: (goal: number) => { set({ dailyGoal: goal }) },
      getTodayProgress: () => {
        const { todayMinutes, dailyGoal } = get()
        return Math.min((todayMinutes / dailyGoal) * 100, 100)
      },
    }),
    { name: 'progress-storage' }
  )
)