import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/landing/Footer';

export default function TermsOfService() {
  const lastUpdated = "March 16, 2026";
  
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Terms of Service
          </h1>
          <p className="mt-2 text-zinc-500">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-zinc mt-12 dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using CountFast, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on CountFast for personal, non-commercial transitory viewing only.
            </p>
            <p className="mb-4">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
              <li>Attempt to decompile or reverse engineer any software contained on CountFast.</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on CountFast are provided on an &apos;as is&apos; basis. CountFast makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall CountFast or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CountFast.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
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
