export interface InfluencerSubmission {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  primary_platform: 'Instagram' | 'YouTube' | 'Facebook';
  profile_url: string;
  profile_handle: string;
  followers_range: string;
  categories: string[];
  languages: string[];
  consent_given: boolean;
  status?: 'pending' | 'approved' | 'rejected';
  admin_notes?: string;
}

export const CATEGORIES = [
  'Fashion',
  'Fitness',
  'Tech',
  'Beauty',
  'Food',
  'Travel',
  'Finance',
  'Gaming',
  'Parenting',
  'Education',
  'Auto',
  'Home',
] as const;

export const LANGUAGES = [
  'Hindi',
  'English',
  'Hinglish',
  'Punjabi',
  'Tamil',
  'Telugu',
  'Marathi',
  'Bengali',
  'Kannada',
  'Malayalam',
  'Gujarati',
] as const;

export const FOLLOWERS_RANGES = [
  '1K - 5K',
  '5K - 10K',
  '10K - 25K',
  '25K - 50K',
  '50K - 100K',
  '100K+',
] as const;

export const PLATFORMS = ['Instagram', 'YouTube', 'Facebook'] as const;

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Puducherry',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Lakshadweep',
  'Andaman and Nicobar Islands',
] as const;
