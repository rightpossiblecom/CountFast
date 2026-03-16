import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/landing/Footer';
import Link from 'next/link';

export default function HelpCenter() {
  const categories = [
    {
      title: 'Getting Started',
      description: 'New to CountFast? Learn the basics and set up your profile.',
      links: ['How to play', 'Creating an account', 'Game modes explained'],
    },
    {
      title: 'Your Account',
      description: 'Manage your settings, subscription, and data privacy.',
      links: ['Changing your email', 'Resetting password', 'Deleting your account'],
    },
    {
      title: 'Gameplay & Stats',
      description: 'Understand how scores are calculated and track your progress.',
      links: ['Scoring system', 'Leaderboards', 'Performance metrics'],
    },
    {
      title: 'Troubleshooting',
      description: 'Fixing common issues and reporting bugs.',
      links: ['App crashing', 'Syncing errors', 'Reporting a bug'],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Help Center
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Find answers, troubleshoot issues, and learn how to get the most out of CountFast.
            </p>
            <div className="mx-auto mt-10 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full rounded-full border border-zinc-300 bg-white px-6 py-4 pl-12 text-zinc-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                />
                <svg className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2">
            {categories.map((category, index) => (
              <div key={index} className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {category.title}
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {category.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {category.links.map((link, lIndex) => (
                    <li key={lIndex}>
                      <Link href="#" className="text-indigo-600 hover:underline dark:text-indigo-400">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-2xl bg-zinc-950 p-12 text-center text-white">
            <h2 className="text-3xl font-bold">Still need help?</h2>
            <p className="mt-4 text-zinc-400">Our support team is available 24/7 to answer your questions.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 py-2 font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
