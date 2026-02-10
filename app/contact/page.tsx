'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sora } from "../fonts";
import { motion } from "framer-motion";
import SeoWebPageJsonLd from "@/components/SeoWebPageJsonLd";

function MailIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
}

function MapPinIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
}

export default function ContactUs() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target as HTMLFormElement;
    const formData = {
      firstName: (form.elements.namedItem('first_name') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('last_name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        alert("Failed to send message. Please try again.");
        setStatus('idle');
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      setStatus('idle');
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0118] text-white relative">
      <SeoWebPageJsonLd
        path="/contact"
        title="Contact NanoFluencer"
        description="Contact NanoFluencer to connect influencers with brands and agencies or to launch a campaign."
        breadcrumbs={[
          { name: "Home", url: "https://www.nanofluencer.com/" },
          { name: "Contact", url: "https://www.nanofluencer.com/contact" },
        ]}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0118] via-[#0f0520] to-[#0a0118]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-12 text-center">
            <Link href="/" className="inline-block mb-8 text-white/50 hover:text-white transition-colors">
                ← Back to Home
            </Link>
            <h1 className={`${sora.className} text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 bg-clip-text text-transparent`}>
                Get in Touch
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Have questions about joining as an influencer or launching a brand campaign? We're here to help.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Info Card */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl h-full"
            >
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center shrink-0">
                            <MailIcon className="w-6 h-6 text-violet-400" />
                        </div>
                        <div>
                            <p className="text-white/50 text-sm mb-1">Email Us</p>
                            <a href="mailto:support@nanofluencer.com" className="text-xl font-semibold text-white hover:text-violet-300 transition-colors">
                                support@nanofluencer.com
                            </a>
                            <p className="text-white/40 text-sm mt-2">Typical response time: 24 hours</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0">
                            <MapPinIcon className="w-6 h-6 text-pink-400" />
                        </div>
                        <div>
                            <p className="text-white/50 text-sm mb-1">Location</p>
                            <p className="text-xl font-semibold text-white">Haryana, India</p>
                            <p className="text-white/40 text-sm mt-2">Digital-first team working remotely</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">For Brands</h4>
                    <p className="text-white/60 text-sm">Looking to scale your marketing? Email us directly with "Partnership" in the subject line for priority handling.</p>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl"
            >
                {status === 'success' ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-white/50">We'll get back to you as soon as possible.</p>
                        <button onClick={() => setStatus('idle')} className="mt-6 text-violet-400 hover:text-white underline">Send another message</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">First Name</label>
                                <input type="text" name="first_name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/70">Last Name</label>
                                <input type="text" name="last_name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Email Address</label>
                            <input type="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Subject</label>
                            <select name="subject" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors">
                                <option>General Inquiry</option>
                                <option>I'm an Influencer</option>
                                <option>I'm a Brand</option>
                                <option>Technical Support</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/70">Message</label>
                            <textarea name="message" required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="How can we help you?" />
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'submitting'}
                            className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl font-bold text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
      </div>
    </main>
  );
}
