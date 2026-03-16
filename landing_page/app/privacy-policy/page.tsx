import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/landing/Footer';

export default function PrivacyPolicy() {
  const lastUpdated = "March 16, 2026";
  
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Privacy Policy
          </h1>
          <p className="mt-2 text-zinc-500">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-zinc mt-12 dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to CountFast. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. The Data We Collect</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How Your Data Is Used</h2>
            <p className="mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <a href="mailto:support@countfast.app" className="text-indigo-600 hover:underline">support@countfast.app</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
