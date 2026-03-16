'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Is CountFast really free?',
      answer: 'Yes! The basic version of CountFast is completely free to play. We also offer a premium subscription for advanced analytics and global rankings.',
    },
    {
      question: 'How do I improve my counting speed?',
      answer: 'Practice is key. We recommend 10 minutes of training per day. Focus on "subitizing" (the ability to see a small amount of objects and know how many there are without counting them individually).',
    },
    {
      question: 'What are the system requirements?',
      answer: 'CountFast works on any modern iOS or Android device. It is optimized for both phones and tablets.',
    },
    {
      question: 'Can I play offline?',
      answer: 'Absolutely. Classic mode and Time Attack are fully functional without an internet connection. Global high scores require sync once you re-connect.',
    },
    {
      question: 'Is this game suitable for children?',
      answer: 'Yes, CountFast is a great educational tool for children to develop their number sense and pattern recognition skills.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Questions? We have answers.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-zinc-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-zinc-100 p-6 dark:border-zinc-800">
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
