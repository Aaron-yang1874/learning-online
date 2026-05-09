import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-9xl font-black text-white/10 mb-8">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">页面未找到</h1>
        <p className="text-slate-400 mb-8 text-lg">抱歉，您访问的页面不存在</p>
        <Button asChild size="lg">
          <a href="/">返回首页</a>
        </Button>
      </div>
    </div>
  );
}
