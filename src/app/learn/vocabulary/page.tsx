'use client'

import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Volume2, Check, X, RotateCcw } from 'lucide-react'

const words = [
  { id: '1', word: 'hello', meaning: '你好', pronunciation: '/həˈloʊ/' },
  { id: '2', word: 'hi', meaning: '嗨', pronunciation: '/haɪ/' },
  { id: '3', word: 'goodbye', meaning: '再见', pronunciation: '/ɡʊdˈbaɪ/' },
  { id: '4', word: 'thank you', meaning: '谢谢', pronunciation: '/θæŋk juː/' },
  { id: '5', word: 'please', meaning: '请', pronunciation: '/pliːz/' },
]

export default function VocabularyPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [knownCount, setKnownCount] = useState(0)
  const [unknownCount, setUnknownCount] = useState(0)
  const [completedWords, setCompletedWords] = useState<Set<string>>(new Set())

  const currentWord = words[currentIndex]

  const handleKnown = () => {
    setKnownCount(prev => prev + 1)
    setCompletedWords(prev => new Set([...prev, currentWord.id]))
    setShowAnswer(false)
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handleUnknown = () => {
    setUnknownCount(prev => prev + 1)
    setCompletedWords(prev => new Set([...prev, currentWord.id]))
    setShowAnswer(false)
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setShowAnswer(false)
    setKnownCount(0)
    setUnknownCount(0)
    setCompletedWords(new Set())
  }

  const isCompleted = completedWords.size === words.length

  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">单词记忆</h1>
          <Badge>{currentIndex + 1}/{words.length}</Badge>
        </div>

        {isCompleted ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">复习完成！</h2>
              <p className="text-gray-500 mb-6">本次复习 {words.length} 个单词</p>
              <div className="flex justify-center gap-8 mb-6">
                <div>
                  <div className="text-3xl font-bold text-green-500">{knownCount}</div>
                  <div className="text-sm text-gray-500">已掌握</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500">{unknownCount}</div>
                  <div className="text-sm text-gray-500">需复习</div>
                </div>
              </div>
              <Button onClick={handleRestart} className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                再次复习
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="aspect-[4/3] flex items-center justify-center">
              <CardContent className="text-center">
                {!showAnswer ? (
                  <>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentWord.word}</h2>
                    <p className="text-gray-500 mb-6">{currentWord.pronunciation}</p>
                    <Button onClick={() => setShowAnswer(true)} className="flex items-center gap-2 mx-auto">
                      <Volume2 className="h-4 w-4" />
                      查看释义
                    </Button>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{currentWord.word}</h2>
                    <p className="text-gray-500 mb-4">{currentWord.pronunciation}</p>
                    <div className="text-2xl text-primary-500 mb-6">{currentWord.meaning}</div>
                    <div className="flex justify-center gap-4">
                      <Button onClick={handleKnown} variant="secondary" className="flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        认识
                      </Button>
                      <Button onClick={handleUnknown} variant="outline" className="flex items-center gap-2">
                        <X className="h-4 w-4" />
                        不认识
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-center gap-2">
              {words.map((word, index) => (
                <div
                  key={word.id}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    completedWords.has(word.id)
                      ? 'bg-gray-300'
                      : index === currentIndex
                      ? 'bg-primary-500'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}