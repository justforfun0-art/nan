-- Influencer Submissions Table
CREATE TABLE IF NOT EXISTS influencer_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,

  -- Personal Information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,

  -- Social Media Information
  primary_platform TEXT NOT NULL CHECK (primary_platform IN ('Instagram', 'YouTube', 'Facebook')),
  profile_url TEXT NOT NULL,
  profile_handle TEXT NOT NULL,
  followers_range TEXT NOT NULL,

  -- Categories and Languages (stored as JSONB arrays)
  categories JSONB NOT NULL DEFAULT '[]'::jsonb,
  languages JSONB NOT NULL DEFAULT '[]'::jsonb,

  -- Consent
  consent_given BOOLEAN NOT NULL DEFAULT false,

  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  admin_notes TEXT,

  -- Indexes for better query performance
  CONSTRAINT unique_email UNIQUE (email)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_influencer_submissions_email ON influencer_submissions(email);
CREATE INDEX IF NOT EXISTS idx_influencer_submissions_created_at ON influencer_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_influencer_submissions_status ON influencer_submissions(status);
CREATE INDEX IF NOT EXISTS idx_influencer_submissions_primary_platform ON influencer_submissions(primary_platform);

-- Enable Row Level Security
ALTER TABLE influencer_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for the form submission)
CREATE POLICY "Allow anonymous inserts" ON influencer_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to read all submissions (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON influencer_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update submissions (for admin actions)
CREATE POLICY "Allow authenticated updates" ON influencer_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Optional: Create a view for public display later (currently returns nothing)
CREATE OR REPLACE VIEW public_influencers AS
SELECT
  id,
  name,
  primary_platform,
  profile_handle,
  followers_range,
  categories,
  languages,
  city,
  state
FROM influencer_submissions
WHERE status = 'approved' AND false; -- Set to false to hide all for now

-- Grant access to the view
GRANT SELECT ON public_influencers TO anon;
GRANT SELECT ON public_influencers TO authenticated;
