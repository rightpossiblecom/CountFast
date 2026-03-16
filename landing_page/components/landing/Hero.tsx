import Link from 'next/link';
import AppScreen from '@/components/mockup/AppScreen';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32 dark:bg-black md:pt-48">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-20 dark:opacity-30">
        <div className="h-[400px] w-[600px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center md:px-8">
        <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-900/30 dark:bg-indigo-900/20 dark:text-indigo-300">
          <span className="mr-2 rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
            New
          </span>
          Version 1.0 is now live
        </div>
        
        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-7xl">
          Fast counting. <br />
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Faster decisions.
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 md:text-xl">
          Sharpen your cognitive agility with CountFast. A high-speed brain training game designed to improve your focus, processing speed, and split-second accuracy.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/download"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 dark:shadow-none"
          >
            Start Training Now
            <svg 
              className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex h-14 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-black dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            How it works
          </Link>
        </div>

        <div className="mt-20 flex justify-center">
            <AppScreen />
        </div>
      </div>
    </section>
  );
}
