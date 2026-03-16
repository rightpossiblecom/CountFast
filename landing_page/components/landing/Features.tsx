export default function Features() {
  const features = [
    {
      title: 'Classic Mode',
      description: 'The pure counting experience. Perfect for warming up your brain muscles.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Time Attack',
      description: 'Race against the clock. How many correct counts can you make in 60 seconds?',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your High Score, Best Streak, and Daily High to see your growth over time.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Accuracy Analytics',
      description: 'Get deep insights into your counting precision with detailed accuracy reports.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Minimalist UI',
      description: 'Zero distractions. Focus entirely on the task at hand with our sleek interface.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      ),
    },
    {
      title: 'Global High Scores',
      description: 'Compare your speed and accuracy with top count masters from around the world.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Everything you need for a faster mind.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            CountFast combines simple mechanics with deep cognitive science to deliver a brain-pumping experience.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-indigo-300 hover:shadow-xl dark:border-zinc-800 dark:bg-black dark:hover:border-indigo-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-900/20 dark:text-indigo-400 dark:group-hover:bg-indigo-600">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
