'use client'

import React, { useState } from 'react'
import { MainLayout } from '@/components/layouts/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Play, Pause, Check, X, RotateCcw } from 'lucide-react'

const exercises = [
  {
    id: '1',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    question: 'What did the speaker say?',
    options: ['Hello, how are you?', 'Good morning, everyone.', 'Thank you for coming.', 'Nice to meet you.'],
    correctAnswer: 1,
    transcript: 'Good morning, everyone.',
  },
  {
    id: '2',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    question: 'What time is the meeting?',
    options: ['At 9 AM', 'At 2 PM', 'At 3 PM', 'At 5 PM'],
    correctAnswer: 2,
    transcript: 'The meeting is at three o\'clock in the afternoon.',
  },
]

export default function ListeningPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())

  const currentExercise = exercises[currentIndex]

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSelectAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    if (selectedAnswer === currentExercise.correctAnswer) {
      setScore(prev => prev + 1)
    }
    setCompletedExercises(prev => new Set([...prev, currentExercise.id]))
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setIsPlaying(false)
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const isCompleted = completedExercises.size === exercises.length

  return (
    <MainLayout>
      <div className="pb-16 md:pb-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">听力训练</h1>
          <Badge variant="secondary">得分: {score}</Badge>
        </div>

        {isCompleted ? (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">🎧</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">练习完成！</h2>
              <p className="text-gray-500 mb-6">答对 {score}/{exercises.length} 题</p>
              <div className="text-4xl font-bold text-primary-500 mb-6">
                {Math.round((score / exercises.length) * 100)}%
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

                <div className="flex justify-center mb-6">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={togglePlay}
                    className="h-20 w-20 rounded-full"
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </Button>
                </div>

                <h2 className="text-xl font-medium text-gray-900 mb-6">{currentExercise.question}</h2>

                <div className="space-y-3">
                  {currentExercise.options.map((option, index) => {
                    let buttonClass = 'border-gray-200 hover:border-primary-500 hover:text-primary-500'
                    if (showResult) {
                      if (index === currentExercise.correctAnswer) {
                        buttonClass = 'border-green-500 bg-green-50 text-green-700'
                      } else if (index === selectedAnswer && index !== currentExercise.correctAnswer) {
                        buttonClass = 'border-red-500 bg-red-50 text-red-700'
                      }
                    } else if (selectedAnswer === index) {
                      buttonClass = 'border-primary-500 text-primary-500'
                    }
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={`w-full justify-start ${buttonClass}`}
                        onClick={() => handleSelectAnswer(index)}
                        disabled={showResult}
                      >
                        {String.fromCharCode(65 + index)}. {option}
                        {showResult && index === currentExercise.correctAnswer && <Check className="ml-auto h-4 w-4" />}
                        {showResult && index === selectedAnswer && index !== currentExercise.correctAnswer && <X className="ml-auto h-4 w-4" />}
                      </Button>
                    )
                  })}
                </div>

                {showResult && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-500 mb-2">原文：</p>
                    <p className="text-blue-700">{currentExercise.transcript}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-end">
              {!showResult ? (
                <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
                  提交答案
                </Button>
              ) : (
                <Button onClick={handleNext}>下一题</Button>
              )}
            </div>

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