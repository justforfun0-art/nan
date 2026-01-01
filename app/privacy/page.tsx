'use client';

import Link from 'next/link';
import { sora } from "../fonts"; // Ensure this path is correct
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0118] text-white relative">
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0118] via-[#0f0520] to-[#0a0118]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-12 text-center">
            <Link href="/" className="inline-block mb-8 text-white/50 hover:text-white transition-colors">
                ← Back to Home
            </Link>
            <h1 className={`${sora.className} text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent`}>
                Privacy Policy
            </h1>
            <p className="text-white/50">Last Updated: January 2, 2026</p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-white/80 leading-relaxed bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl"
        >
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>Welcome to NanoFluencer. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and sign up as an influencer or brand.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                    <li><strong>Identity Data:</strong> First name, last name, username, and social media profile links (Instagram, YouTube, etc.).</li>
                    <li><strong>Contact Data:</strong> Email address and telephone number.</li>
                    <li><strong>Financial Data:</strong> UPI IDs or bank account details for processing payments.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, and usage data via cookies.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we use your personal data to:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2 text-white/70">
                    <li>Match influencers with relevant brand campaigns.</li>
                    <li>Process payments for completed campaigns.</li>
                    <li>Manage your account and registration.</li>
                    <li>Improve our website, services, and customer experience.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing</h2>
                <p>We do not sell your data. We may share your data with:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2 text-white/70">
                    <li>Brands (only relevant profile data for campaign matching).</li>
                    <li>Service providers (hosting, payment processing, analytics).</li>
                    <li>Legal authorities if required by law.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Access to your personal data is limited to those employees and partners who have a business need to know.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:nanofluencer@gmail.com" className="text-violet-400 hover:text-violet-300 underline">nanofluencer@gmail.com</a></p>
            </section>
        </motion.div>
      </div>
    </main>
  );
}
