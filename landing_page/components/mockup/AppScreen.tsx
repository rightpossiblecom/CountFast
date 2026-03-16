export default function AppScreen() {
  return (
    <div className="relative mx-auto h-[600px] w-[300px] overflow-hidden rounded-[3rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-zinc-900"></div>
      
      {/* Screen Content */}
      <div className="h-full w-full bg-white dark:bg-black p-6 pt-12">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-semibold text-zinc-400">Welcome back,</h4>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Brain Master</h3>
          </div>
          <div className="h-10 w-10 rounded-full bg-indigo-100 p-1 dark:bg-indigo-900/30">
            <div className="h-full w-full rounded-full bg-indigo-600"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-indigo-50 p-4 dark:bg-zinc-900">
            <span className="text-[10px] font-bold uppercase text-indigo-600">Score</span>
            <div className="text-xl font-black text-indigo-600">1,240</div>
          </div>
          <div className="rounded-2xl bg-purple-50 p-4 dark:bg-zinc-900">
            <span className="text-[10px] font-bold uppercase text-purple-600">Streak</span>
            <div className="text-xl font-black text-purple-600">x12</div>
          </div>
        </div>

        {/* Main Game Card */}
        <div className="mt-6 rounded-[2rem] bg-zinc-900 p-6 text-white dark:bg-zinc-800">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-zinc-400">CURRENT MODE</span>
            <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[8px] font-bold text-green-400">LIVE</span>
          </div>
          <h2 className="mt-2 text-2xl font-black">Time Attack</h2>
          <p className="mt-1 text-xs text-zinc-400">Beat your record of 42.5s</p>
          
          <button className="mt-6 w-full rounded-full bg-indigo-600 py-3 text-sm font-bold shadow-lg shadow-indigo-500/30 transition-transform active:scale-95">
            PLAY NOW
          </button>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Recent Games</h4>
          <div className="mt-4 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border border-zinc-100 p-3 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-50">Classic Counting</div>
                    <div className="text-[10px] text-zinc-500">2 hours ago</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-zinc-900 dark:text-zinc-50">+150 xp</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
