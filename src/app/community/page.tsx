'use client'

import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts/main-layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Heart, Share2, MoreHorizontal } from 'lucide-react'

const posts = [
  {
    id: '1',
    author: { name: '英语达人', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    content: '今天完成了英语 A1 课程的第一单元，感觉进步很大！坚持学习 30 天，冲刺 B1 水平！',
    language: 'en',
    likes: 128,
    comments: 23,
    time: '2小时前',
  },
  {
    id: '2',
    author: { name: '日语学习者', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    content: '分享一个学习日语的小技巧：每天看一集日语动漫，既有趣又能练习听力，推荐给大家！',
    language: 'ja',
    likes: 256,
    comments: 45,
    time: '5小时前',
  },
  {
    id: '3',
    author: { name: '韩语新手', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    content: '刚开始学习韩语，发音真的很难！有没有一起学习韩语的小伙伴，我们可以互相监督',
    language: 'ko',
    likes: 89,
    comments: 12,
    time: '1天前',
  },
]

const languageColors: Record<string, string> = { en: 'bg-blue-500', ja: 'bg-pink-500', ko: 'bg-purple-500' }
const languageNames: Record<string, string> = { en: '英语', ja: '日语', ko: '韩语' }

export default function CommunityPage() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) newSet.delete(postId)
      else newSet.add(postId)
      return newSet
    })
  }

  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">学习社区</h1>
          <Button>发布动态</Button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-900">{post.author.name}</span>
                      <Badge className={languageColors[post.language]}>{languageNames[post.language]}</Badge>
                      <span className="text-xs text-gray-400">{post.time}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className={`h-5 w-5 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        <span className="text-sm">{likedPosts.has(post.id) ? post.likes + 1 : post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-primary-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-primary-500 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span className="text-sm">分享</span>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}