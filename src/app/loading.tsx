export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/20 border-t-primary-500 rounded-full animate-spin" />
        <p className="text-slate-400 text-lg">加载中...</p>
      </div>
    </div>
  );
}
