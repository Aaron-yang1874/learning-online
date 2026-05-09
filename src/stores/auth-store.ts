import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  nickname: string
  avatar?: string
  level: string
  streakDays: number
  totalMinutes: number
  languages: string[]
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, nickname: string) => Promise<void>
  logout: () => void
  updateProfile: (data: Partial<User>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true })
        await new Promise(resolve => setTimeout(resolve, 1000))
        const mockUser: User = {
          id: '1',
          email,
          nickname: '学习达人',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
          level: 'A2',
          streakDays: 7,
          totalMinutes: 1250,
          languages: ['en', 'ja'],
        }
        set({ user: mockUser, isAuthenticated: true, isLoading: false })
      },

      register: async (email: string, password: string, nickname: string) => {
        set({ isLoading: true })
        await new Promise(resolve => setTimeout(resolve, 1000))
        const mockUser: User = {
          id: '1',
          email,
          nickname,
          level: 'beginner',
          streakDays: 0,
          totalMinutes: 0,
          languages: [],
        }
        set({ user: mockUser, isAuthenticated: true, isLoading: false })
      },

      logout: () => { set({ user: null, isAuthenticated: false }) },

      updateProfile: (data: Partial<User>) => {
        set((state) => ({ user: state.user ? { ...state.user, ...data } : null }))
      },
    }),
    { name: 'auth-storage' }
  )
)