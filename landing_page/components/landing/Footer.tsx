import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="CountFast Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                CountFast
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-zinc-600 dark:text-zinc-400">
              Fast counting. Faster decisions. Sharpen your mind with our split-second brain training game.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#features" className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-50">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 transition-colors hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500">
            © {currentYear} CountFast. All rights reserved. Built for speed.
          </p>
        </div>
      </div>
    </footer>
  );
}
