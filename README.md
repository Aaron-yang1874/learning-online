# Learning Online - 多语种在线教育平台

[English](#english) | [中文](#中文)

---

## English

### 🎯 Project Overview

**Learning Online** is a modern, multi-language online education platform that supports English, Japanese, Korean, and other mainstream languages. The platform provides an immersive language learning experience with interactive modules, progress tracking, and personalized learning paths.

### ✨ Features

- **🌍 Multi-language Support**: English, Japanese, Korean, and more
- **📚 Graded Course System**: A1-C2 levels aligned with CEFR standards
- **🎮 Interactive Learning Modules**:
  - Vocabulary flashcards with spaced repetition
  - Grammar exercises with instant feedback
  - Listening training with audio materials
  - Speaking practice with pronunciation guides
- **📊 Progress Tracking**: Daily goals, streak tracking, and detailed analytics
- **🎯 Personalized Learning Paths**: AI-powered recommendations based on your level and goals
- **🏆 Achievement System**: Badges and rewards to keep you motivated
- **👥 Community Features**: Connect with fellow learners, share tips, and practice together

### 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 14 (App Router), TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: Zustand with persistence
- **Database**: Prisma ORM with SQLite
- **Icons**: Lucide React
- **Mobile**: React Native (planned)

### 🚀 Getting Started

#### Prerequisites

- Node.js 18+
- npm or yarn

#### Installation

```bash
# Clone the repository
git clone https://github.com/Aaron-yang1874/learning-online.git
cd learning-online/web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 📁 Project Structure

```
web/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── auth/           # Authentication pages
│   │   ├── achievements/   # Achievement page
│   │   ├── community/      # Community page
│   │   ├── courses/        # Course listing
│   │   ├── learn/          # Learning modules
│   │   │   ├── vocabulary/ # Vocabulary flashcards
│   │   │   ├── grammar/    # Grammar exercises
│   │   │   ├── listening/  # Listening training
│   │   │   └── speaking/   # Speaking practice
│   │   └── profile/        # User profile
│   ├── components/
│   │   ├── features/       # Feature-specific components
│   │   ├── layouts/        # Layout components
│   │   └── ui/             # Reusable UI components
│   ├── stores/             # Zustand state stores
│   ├── lib/                # Utility functions
│   └── types/              # TypeScript type definitions
├── prisma/
│   └── schema.prisma       # Database schema
└── public/                 # Static assets
```

### 🎨 Design System

The platform follows a flat, minimalist tech style inspired by Google, Apple, and Microsoft design principles:

- Clean, modern interface
- Responsive design (mobile-first)
- Accessible color contrast ratios
- Consistent spacing and typography

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 中文

### 🎯 项目概述

**Learning Online** 是一个现代化的多语种在线教育平台，支持英语、日语、韩语等主流语言。平台提供沉浸式语言学习体验，包括互动学习模块、学习进度追踪和个性化学习路径推荐。

### ✨ 核心功能

- **🌍 多语种支持**: 英语、日语、韩语等
- **📚 分级课程体系**: A1-C2 级别，对标 CEFR 标准
- **🎮 互动式学习模块**:
  - 单词记忆卡片（间隔重复算法）
  - 语法练习（即时反馈）
  - 听力训练（音频材料）
  - 口语跟读（发音指导）
- **📊 学习进度追踪**: 每日目标、连续打卡、详细数据分析
- **🎯 个性化学习路径**: 基于用户水平和目标的 AI 推荐
- **🏆 成就激励系统**: 徽章和奖励机制
- **👥 社区交流**: 与学习伙伴连接，分享技巧，共同进步

### 🛠️ 技术栈

- **前端**: React 18, Next.js 14 (App Router), TypeScript
- **样式**: Tailwind CSS, Radix UI
- **状态管理**: Zustand (持久化)
- **数据库**: Prisma ORM + SQLite
- **图标**: Lucide React
- **移动端**: React Native (规划中)

### 🚀 快速开始

#### 环境要求

- Node.js 18+
- npm 或 yarn

#### 安装步骤

```bash
# 克隆仓库
git clone https://github.com/Aaron-yang1874/learning-online.git
cd learning-online/web

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 📁 项目结构

```
web/
├── src/
│   ├── app/                 # Next.js App Router 页面
│   │   ├── auth/           # 认证页面
│   │   ├── achievements/   # 成就页面
│   │   ├── community/      # 社区页面
│   │   ├── courses/        # 课程列表
│   │   ├── learn/          # 学习模块
│   │   │   ├── vocabulary/ # 单词卡片
│   │   │   ├── grammar/    # 语法练习
│   │   │   ├── listening/   # 听力训练
│   │   │   └── speaking/    # 口语跟读
│   │   └── profile/        # 用户资料
│   ├── components/
│   │   ├── features/       # 功能组件
│   │   ├── layouts/        # 布局组件
│   │   └── ui/            # 通用 UI 组件
│   ├── stores/             # Zustand 状态管理
│   ├── lib/                # 工具函数
│   └── types/              # TypeScript 类型定义
├── prisma/
│   └── schema.prisma       # 数据库 schema
└── public/                 # 静态资源
```

### 🎨 设计规范

平台采用扁平化简约科技风格，参考 Google、Apple、Microsoft 的设计原则：

- 简洁现代的界面
- 响应式设计（移动优先）
- 符合无障碍标准的色彩对比度
- 统一的间距和排版规范

### 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Lucide](https://lucide.dev/) - Beautiful & consistent open-source icons
- [Zustand](https://zustand-demo.pmnd.rs/) - Bear necessities for state management
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM

## 📧 Contact

- GitHub: [Aaron-yang1874](https://github.com/Aaron-yang1874)
- Email: faker9407@163.com
