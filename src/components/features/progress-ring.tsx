'use client'

import React from 'react'

interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function ProgressRing({ progress, size = 120, strokeWidth = 8, className }: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className={`relative ${className || ''}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={strokeWidth} fill="none" className="text-gray-100" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="currentColor" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" className="text-primary-500 transition-all duration-500" style={{ strokeDasharray: circumference, strokeDashoffset: offset }} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}