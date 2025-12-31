import { z } from 'zod';
import { CATEGORIES, LANGUAGES, PLATFORMS, FOLLOWERS_RANGES } from './types';

// URL validation patterns
const instagramUrlPattern = /^https?:\/\/(www\.)?(instagram\.com|instagr\.am)\/.+$/i;
const youtubeUrlPattern = /^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\/.+$/i;
const facebookUrlPattern = /^https?:\/\/(www\.)?facebook\.com\/.+$/i;

export const influencerFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number is too long'),
  city: z.string().min(2, 'City is required').max(100, 'City name is too long'),
  state: z.string().min(2, 'State is required'),
  primary_platform: z.enum(PLATFORMS, {
    message: 'Please select a valid platform',
  }),
  profile_url: z.string().url('Invalid URL').refine(
    (url) => {
      // Check if URL matches one of the allowed platforms
      return instagramUrlPattern.test(url) ||
             youtubeUrlPattern.test(url) ||
             facebookUrlPattern.test(url);
    },
    {
      message: 'URL must be from Instagram, YouTube, or Facebook',
    }
  ),
  profile_handle: z.string().min(1, 'Profile handle is required').max(100),
  followers_range: z.enum(FOLLOWERS_RANGES as unknown as [string, ...string[]], {
    message: 'Please select a followers range',
  }),
  categories: z.array(z.string()).min(1, 'Please select at least one category').max(5, 'Maximum 5 categories allowed'),
  languages: z.array(z.string()).min(1, 'Please select at least one language').max(5, 'Maximum 5 languages allowed'),
  consent_given: z.boolean().refine((val) => val === true, {
    message: 'You must give consent to proceed',
  }),
});

export type InfluencerFormData = z.infer<typeof influencerFormSchema>;

// Helper function to validate URL against platform
export function validateUrlForPlatform(url: string, platform: string): boolean {
  switch (platform) {
    case 'Instagram':
      return instagramUrlPattern.test(url);
    case 'YouTube':
      return youtubeUrlPattern.test(url);
    case 'Facebook':
      return facebookUrlPattern.test(url);
    default:
      return false;
  }
}
