export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Objects Appear',
      description: 'A random number of objects flash on the screen. Blink and you might miss them!',
    },
    {
      number: '02',
      title: 'Count Fast',
      description: 'Use your peripheral vision and pattern recognition to estimate the count instantly.',
    },
    {
      number: '03',
      title: 'Pick & Win',
      description: 'Select the correct number from the options. The faster you act, the higher your score.',
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Three steps to cognitive mastery.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="flex justify-center">
                <span className="text-6xl font-black text-zinc-100 dark:text-zinc-900">
                  {step.number}
                </span>
              </div>
              <h3 className="-mt-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {step.title}
              </h3>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-full hidden w-full -translate-x-1/2 md:block">
                    <svg className="h-4 w-full text-zinc-200 dark:text-zinc-800" fill="none" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
