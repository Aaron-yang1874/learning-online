import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create English A1 Course
  await prisma.course.create({
    data: {
      language: 'en',
      title: '英语 A1 基础课程',
      description: '从零开始学习英语，掌握日常交流所需的基础词汇和语法',
      level: 'A1',
      type: 'system',
      thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
      totalLessons: 20,
      units: {
        create: [
          {
            title: '第一单元：问候与介绍',
            description: '学习基本的问候语和自我介绍',
            orderIndex: 0,
            lessons: {
              create: [
                {
                  title: '你好 Hello',
                  type: 'vocabulary',
                  content: JSON.stringify({
                    words: [
                      { word: 'hello', meaning: '你好', pronunciation: '/həˈloʊ/' },
                      { word: 'hi', meaning: '嗨', pronunciation: '/haɪ/' },
                      { word: 'goodbye', meaning: '再见', pronunciation: '/ɡʊdˈbaɪ/' },
                      { word: 'thank you', meaning: '谢谢', pronunciation: '/θæŋk juː/' },
                      { word: 'please', meaning: '请', pronunciation: '/pliːz/' },
                    ]
                  }),
                  orderIndex: 0,
                  estimatedMinutes: 10,
                },
                {
                  title: '自我介绍 Introducing Yourself',
                  type: 'grammar',
                  content: JSON.stringify({
                    patterns: [
                      { pattern: 'My name is ___', meaning: '我的名字是___' },
                      { pattern: 'I am ___ years old', meaning: '我___岁了' },
                    ]
                  }),
                  orderIndex: 1,
                  estimatedMinutes: 15,
                },
              ],
            },
          },
        ],
      },
    },
  })

  // Create Japanese N5 Course
  await prisma.course.create({
    data: {
      language: 'ja',
      title: '日语 N5 入门课程',
      description: '为零基础学员打造的日语入门课程，掌握五十音图和基础会话',
      level: 'A1',
      type: 'system',
      thumbnail: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400',
      totalLessons: 15,
    },
  })

  // Create Korean Course
  await prisma.course.create({
    data: {
      language: 'ko',
      title: '韩语 TOPIK I 入门',
      description: '韩语零基础入门课程，学习韩文字母和基础会话',
      level: 'A1',
      type: 'system',
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
      totalLessons: 12,
    },
  })

  // Create Achievements
  await prisma.achievement.createMany({
    data: [
      { code: 'first_lesson', title: '初次学习', description: '完成第一节课', icon: 'star', category: 'learning', requirement: JSON.stringify({ type: 'lessons_completed', count: 1 }) },
      { code: 'streak_7', title: '连续7天', description: '连续学习7天', icon: 'flame', category: 'learning', requirement: JSON.stringify({ type: 'streak_days', count: 7 }) },
      { code: 'streak_30', title: '连续30天', description: '连续学习30天', icon: 'fire', category: 'learning', requirement: JSON.stringify({ type: 'streak_days', count: 30 }) },
      { code: 'vocab_100', title: '词汇达人', description: '掌握100个单词', icon: 'book', category: 'vocabulary', requirement: JSON.stringify({ type: 'vocabulary_mastered', count: 100 }) },
    ],
  })

  console.log('Seed data created successfully')
}

main().catch((e) => { console.error(e); process.exit(1) }).finally(async () => { await prisma.$disconnect() })