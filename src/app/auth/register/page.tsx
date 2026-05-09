'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Lock, User, Check } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ nickname: '', email: '', password: '', confirmPassword: '' })

  const passwordRequirements = [
    { met: formData.password.length >= 8, text: '至少8个字符' },
    { met: /[A-Z]/.test(formData.password), text: '包含大写字母' },
    { met: /[0-9]/.test(formData.password), text: '包含数字' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) { alert('两次密码输入不一致'); return }
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary-500 flex items-center justify-center"><span className="text-white font-bold text-xl">L</span></div>
          <CardTitle className="text-2xl">创建账号</CardTitle>
          <CardDescription>开始你的多语言学习之旅</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">昵称</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="text" placeholder="你的昵称" className="pl-10" value={formData.nickname} onChange={(e) => setFormData({ ...formData, nickname: e.target.value })} required />
              </div>
            </div>
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
                <Input type="password" placeholder="••••••••" className="pl-10" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
              </div>
              <div className="space-y-1">
                {passwordRequirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <Check className={`h-3 w-3 ${req.met ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className={req.met ? 'text-green-600' : 'text-gray-400'}>{req.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full" loading={loading}>注册</Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            已有账号？<Link href="/auth/login" className="text-primary-500 hover:underline font-medium">立即登录</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}