import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        
        {/* Bottom CTA */}
        <section className="bg-indigo-600 py-24 text-center">
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to challenge your brain?
            </h2>
            <p className="mt-4 text-lg text-indigo-100 italic">
              &quot;The best way to predict your future speed is to train for it today.&quot;
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/download"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-10 py-3 text-lg font-bold text-indigo-600 shadow-xl transition-all hover:bg-zinc-100"
              >
                Download Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-indigo-400 px-10 py-3 text-lg font-bold text-white transition-all hover:bg-indigo-500"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
