import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/landing/Footer';

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Get in touch
              </h1>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Have questions about CountFast? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
              </p>
              
              <div className="mt-12 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Email</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">Our friendly team is here to help.</p>
                    <a href="mailto:support@countfast.app" className="mt-2 block font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                      support@countfast.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Social Media</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">Follow us for updates and tips.</p>
                    <div className="mt-2 flex gap-4">
                      <a href="https://twitter.com/countfast" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Twitter</a>
                      <a href="https://instagram.com/countfast" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-black dark:text-zinc-50 dark:focus:border-indigo-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-black dark:text-zinc-50 dark:focus:border-indigo-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-black dark:text-zinc-50 dark:focus:border-indigo-400"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 dark:shadow-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
