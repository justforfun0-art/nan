'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { influencerFormSchema, type InfluencerFormData } from '@/lib/validation';
import {
  CATEGORIES,
  LANGUAGES,
  FOLLOWERS_RANGES,
  PLATFORMS,
  INDIAN_STATES,
} from '@/lib/types';

interface InfluencerFormProps {
  onSuccess?: () => void;
}

export default function InfluencerForm({ onSuccess }: InfluencerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<InfluencerFormData>({
    resolver: zodResolver(influencerFormSchema),
    defaultValues: {
      categories: [],
      languages: [],
      consent_given: false,
    },
  });

  const selectedPlatform = watch('primary_platform');

  const onSubmit = async (data: InfluencerFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      toast.success('Application submitted successfully! We\'ll be in touch soon.');
      onSuccess?.();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-white placeholder:text-white/40";
  const labelClasses = "block text-sm font-medium text-white/80 mb-2";
  const errorClasses = "text-pink-400 text-sm mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-8">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-sm">1</span>
          Personal Information
        </h3>

        <div>
          <label className={labelClasses}>
            Full Name <span className="text-pink-400">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            className={inputClasses}
            placeholder="Enter your full name"
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Email <span className="text-pink-400">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              className={inputClasses}
              placeholder="your@email.com"
            />
            {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
          </div>

          <div>
            <label className={labelClasses}>
              Phone / WhatsApp <span className="text-pink-400">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              className={inputClasses}
              placeholder="XXXXXXXXXX"
            />
            {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              City <span className="text-pink-400">*</span>
            </label>
            <input
              {...register('city')}
              type="text"
              className={inputClasses}
              placeholder="Enter your city"
            />
            {errors.city && <p className={errorClasses}>{errors.city.message}</p>}
          </div>

          <div>
            <label className={labelClasses}>
              State <span className="text-pink-400">*</span>
            </label>
            <select {...register('state')} className={inputClasses}>
              <option value="" className="bg-[#0f0c29]">Select state</option>
              {INDIAN_STATES.map((state) => (
                <option key={state} value={state} className="bg-[#0f0c29]">
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <p className={errorClasses}>{errors.state.message}</p>}
          </div>
        </div>
      </div>

      {/* Social Media Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-sm">2</span>
          Social Media
        </h3>

        <div>
          <label className={labelClasses}>
            Primary Platform <span className="text-pink-400">*</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {PLATFORMS.map((platform) => (
              <label
                key={platform}
                className={`flex items-center justify-center p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedPlatform === platform
                    ? 'border-violet-500 bg-violet-500/20 text-white'
                    : 'border-white/10 hover:border-white/30 text-white/60'
                }`}
              >
                <input
                  type="radio"
                  value={platform}
                  {...register('primary_platform')}
                  className="sr-only"
                />
                <span className="font-medium">{platform}</span>
              </label>
            ))}
          </div>
          {errors.primary_platform && <p className={errorClasses}>{errors.primary_platform.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Profile URL <span className="text-pink-400">*</span>
            </label>
            <input
              {...register('profile_url')}
              type="url"
              className={inputClasses}
              placeholder={`https://${selectedPlatform?.toLowerCase() || 'instagram'}.com/yourprofile`}
            />
            {errors.profile_url && <p className={errorClasses}>{errors.profile_url.message}</p>}
          </div>

          <div>
            <label className={labelClasses}>
              Username / Handle <span className="text-pink-400">*</span>
            </label>
            <input
              {...register('profile_handle')}
              type="text"
              className={inputClasses}
              placeholder="@yourhandle"
            />
            {errors.profile_handle && <p className={errorClasses}>{errors.profile_handle.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClasses}>
            Followers Range <span className="text-pink-400">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {FOLLOWERS_RANGES.map((range) => (
              <label
                key={range}
                className={`flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all text-center ${
                  watch('followers_range') === range
                    ? 'border-violet-500 bg-violet-500/20 text-white'
                    : 'border-white/10 hover:border-white/30 text-white/60'
                }`}
              >
                <input
                  type="radio"
                  value={range}
                  {...register('followers_range')}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{range}</span>
              </label>
            ))}
          </div>
          {errors.followers_range && <p className={errorClasses}>{errors.followers_range.message}</p>}
        </div>
      </div>

      {/* Categories & Languages */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-sm">3</span>
          Categories & Languages
        </h3>

        <div>
          <label className={labelClasses}>
            Content Categories <span className="text-pink-400">*</span>
            <span className="text-white/40 ml-2">(Select 1-5)</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {CATEGORIES.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 p-3 rounded-xl border border-white/10 hover:border-violet-500/50 cursor-pointer transition-all group"
              >
                <input
                  type="checkbox"
                  value={category}
                  {...register('categories')}
                  className="w-4 h-4 rounded border-white/30 bg-transparent text-violet-500 focus:ring-violet-500/20"
                />
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">{category}</span>
              </label>
            ))}
          </div>
          {errors.categories && <p className={errorClasses}>{errors.categories.message}</p>}
        </div>

        <div>
          <label className={labelClasses}>
            Languages <span className="text-pink-400">*</span>
            <span className="text-white/40 ml-2">(Select 1-5)</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {LANGUAGES.map((language) => (
              <label
                key={language}
                className="flex items-center gap-2 p-3 rounded-xl border border-white/10 hover:border-violet-500/50 cursor-pointer transition-all group"
              >
                <input
                  type="checkbox"
                  value={language}
                  {...register('languages')}
                  className="w-4 h-4 rounded border-white/30 bg-transparent text-violet-500 focus:ring-violet-500/20"
                />
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">{language}</span>
              </label>
            ))}
          </div>
          {errors.languages && <p className={errorClasses}>{errors.languages.message}</p>}
        </div>
      </div>

      {/* Consent */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register('consent_given')}
            className="mt-1 w-5 h-5 rounded border-white/30 bg-transparent text-violet-500 focus:ring-violet-500/20"
          />
          <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
            I consent to NanoFluencer.com storing and processing my information for the purpose
            of connecting me with brand partnerships. I understand that my data will be handled
            according to the privacy policy. <span className="text-pink-400">*</span>
          </span>
        </label>
        {errors.consent_given && <p className={errorClasses}>{errors.consent_given.message}</p>}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        className="neon-button w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-500/20"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting...
          </span>
        ) : (
          'Submit Application'
        )}
      </motion.button>

      <p className="text-xs text-center text-white/40">
        By submitting, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  );
}
