import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CountFast Logo"
            width={32}
            height={32}
            className="rounded-lg shadow-sm"
          />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            CountFast
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
            How It Works
          </Link>
          <Link href="#faq" className="text-sm font-medium text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
            FAQ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/download"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 dark:shadow-none"
          >
            Get the App
          </Link>
        </div>
      </div>
    </nav>
  );
}
