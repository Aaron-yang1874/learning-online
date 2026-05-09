'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push('/learn')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary-500 flex items-center justify-center"><span className="text-white font-bold text-xl">L</span></div>
          <CardTitle className="text-2xl">欢迎回来</CardTitle>
          <CardDescription>登录到你的 LinguaLearn 账号</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">邮箱</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="email" placeholder="your@email.com" className="pl-10" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">密码</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="pl-10 pr-10" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-gray-300" /><span className="text-gray-600">记住我</span></label>
              <Link href="/auth/forgot-password" className="text-primary-500 hover:underline">忘记密码？</Link>
            </div>
            <Button type="submit" className="w-full" loading={loading}>登录</Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            还没有账号？<Link href="/auth/register" className="text-primary-500 hover:underline font-medium">立即注册</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}