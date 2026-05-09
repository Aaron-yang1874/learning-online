'use client'

import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play, Mic, MicOff, RotateCcw, Check } from 'lucide-react'

const exercises = [
  {
    id: '1',
    text: 'Hello, how are you?',
    hint: '试着跟读这句话',
  },
  {
    id: '2',
    text: 'I am learning English.',
    hint: '注意发音',
  },
]

export default function SpeakingPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [hasRecorded, setHasRecorded] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())

  const currentExercise = exercises[currentIndex]

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      setHasRecorded(true)
    }
  }

  const handleSubmit = () => {
    setShowResult(true)
    const randomScore = Math.floor(Math.random() * 30) + 70
    setScore(prev => prev + randomScore)
    setCompletedExercises(prev => new Set([...prev, currentExercise.id]))
  }

  const handleNext = () => {
    setIsRecording(false)
    setHasRecorded(false)
    setShowResult(false)
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const isCompleted = completedExercises.size === exercises.length

  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">口语跟读</h1>
          <Badge variant="secondary">平均得分: {score > 0 ? Math.round(score / completedExercises.size) : 0}</Badge>
        </div>

        {isCompleted ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">🎤</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">练习完成！</h2>
              <p className="text-gray-500 mb-6">完成 {exercises.length} 个口语练习</p>
              <div className="text-4xl font-bold text-primary-500 mb-6">
                {Math.round(score / completedExercises.size)}分
              </div>
              <Button onClick={() => window.location.reload()}>再来一次</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Badge>{currentIndex + 1}/{exercises.length}</Badge>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-medium text-gray-900 mb-2">{currentExercise.text}</h2>
                  <p className="text-gray-500">{currentExercise.hint}</p>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={toggleRecording}
                  className={`h-24 w-24 rounded-full mx-auto ${isRecording ? 'bg-red-100 border-red-500 text-red-500' : ''}`}
                  disabled={showResult}
                >
                  {isRecording ? <MicOff className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
                </Button>

                {isRecording && (
                  <div className="text-center mt-4">
                    <div className="flex justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-8 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">正在录音...</p>
                  </div>
                )}

                {hasRecorded && !showResult && (
                  <div className="mt-6 flex justify-center gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      重放
                    </Button>
                    <Button onClick={handleSubmit}>提交评分</Button>
                  </div>
                )}

                {showResult && (
                  <div className="mt-6">
                    <div className="text-center mb-4">
                      <div className="text-6xl font-bold text-primary-500">85分</div>
                      <p className="text-gray-500 mt-2">发音准确度：良好</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">发音建议：</span>
                        "Hello" 的发音可以更清晰一些，注意 "ll" 的发音。
                      </p>
                    </div>
                    <Button onClick={handleNext} className="w-full">下一题</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-center gap-2">
              {exercises.map((exercise, index) => (
                <div
                  key={exercise.id}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    completedExercises.has(exercise.id)
                      ? 'bg-green-500'
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