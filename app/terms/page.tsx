'use client';

import Link from 'next/link';
import { sora } from "../fonts";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0a0118] text-white relative">
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0118] via-[#0f0520] to-[#0a0118]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-12 text-center">
            <Link href="/" className="inline-block mb-8 text-white/50 hover:text-white transition-colors">
                ← Back to Home
            </Link>
            <h1 className={`${sora.className} text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent`}>
                Terms of Service
            </h1>
            <p className="text-white/50">Last Updated: January 2, 2026</p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 text-white/80 leading-relaxed bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl"
        >
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using NanoFluencer, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. User Accounts</h2>
                <p>To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Influencer Obligations</h2>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                    <li>You must be at least 18 years of age (or have parental consent).</li>
                    <li>You agree to produce original content that does not violate any third-party rights.</li>
                    <li>You must clearly disclose sponsored content in accordance with local regulations (e.g., using #ad or #sponsored).</li>
                    <li>You agree to keep your social media engagement authentic (no buying likes/followers).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                <p>Payments for completed campaigns are processed within 7-15 business days after campaign verification. NanoFluencer reserves the right to withhold payment if campaign guidelines are not met or if fraudulent activity is detected.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p>By submitting content for a campaign, you grant the brand and NanoFluencer a non-exclusive, worldwide, royalty-free license to use, reproduce, and display the content for marketing purposes associated with the campaign.</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Termination</h2>
                <p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            </section>
        </motion.div>
      </div>
    </main>
  );
}
