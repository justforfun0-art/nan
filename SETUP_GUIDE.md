# Quick Setup Guide for Nanofluencers.com

## Step-by-Step Setup

### Step 1: Get Supabase API Keys

1. Visit your Supabase project: https://supabase.com/dashboard/project/tjekufdbaxafqmsyiovw
2. Click on **Settings** (gear icon) in the left sidebar
3. Click on **API** under Project Settings
4. You'll see two keys:
   - **Project URL**: `https://tjekufdbaxafqmsyiovw.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`
   - **service_role key**: Another long string (keep this secret!)

### Step 2: Create Database Tables

1. In your Supabase dashboard, click **SQL Editor** in the left sidebar
2. Click **New Query**
3. Open the file `supabase-schema.sql` in this project
4. Copy ALL the contents
5. Paste into the Supabase SQL Editor
6. Click **Run** (or press Cmd/Ctrl + Enter)
7. You should see "Success. No rows returned"

### Step 3: Set Up Environment Variables

1. In your project folder, rename `.env.local.example` to `.env.local`
2. Open `.env.local` in a text editor
3. Replace the values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://tjekufdbaxafqmsyiovw.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=paste_your_service_role_key_here
   ```

### Step 4: Create an Admin Account

1. In Supabase dashboard, click **Authentication** in the left sidebar
2. Click **Users** tab
3. Click **Add user** button (top right)
4. Select **Create new user**
5. Enter:
   - Email: `admin@nanofluencers.com` (or your preferred email)
   - Password: Choose a strong password
   - Auto Confirm User: **Enable this** (toggle on)
6. Click **Create user**

### Step 5: Run the Project

1. Open Terminal/Command Prompt
2. Navigate to the project folder:
   ```bash
   cd /Users/sabar/nanoweb
   ```
3. Install dependencies (if not already done):
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to: http://localhost:3000

### Step 6: Test the Application

1. **Test the Landing Page**:
   - You should see a beautiful gradient landing page
   - Click "Join as Influencer" to see the form

2. **Test the Form**:
   - Fill out the influencer form
   - Submit it
   - You should see a success message

3. **Test the Admin Dashboard**:
   - Go to: http://localhost:3000/admin
   - Login with your admin credentials
   - You should see the submission you just created!

## Troubleshooting

### "Failed to submit application"
- Check that your Supabase credentials in `.env.local` are correct
- Make sure you ran the `supabase-schema.sql` script
- Check the browser console for error messages

### "Login failed" in admin
- Make sure you created an admin user in Supabase Authentication
- Verify the email and password are correct
- Check that auto-confirm is enabled for the user

### Database errors
- Verify the SQL schema was executed successfully
- Check that RLS (Row Level Security) policies were created
- Ensure the table `influencer_submissions` exists

### Environment variables not working
- Make sure the file is named `.env.local` (not `.env.local.txt`)
- Restart the development server after changing `.env.local`
- Check that there are no extra spaces in the values

## Production Deployment

### Deploy to Vercel

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

2. Go to https://vercel.com
3. Click **Add New** → **Project**
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. Add Environment Variables:
   - Click **Environment Variables**
   - Add each variable from your `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`

7. Click **Deploy**
8. Wait for deployment to complete
9. Your site will be live!

### Update Domain

1. In Vercel, go to **Settings** → **Domains**
2. Add `nanofluencers.com`
3. Update your DNS settings (your domain registrar):
   - Add A record: `76.76.21.21`
   - Add CNAME: `cname.vercel-dns.com`
4. Wait for DNS propagation (can take up to 48 hours)

## Next Steps

1. **Customize the Content**: Update the landing page text and colors to match your brand
2. **Add More Admins**: Create additional admin users in Supabase
3. **Set Up Email Notifications**: Configure Supabase to send emails on new submissions
4. **Enable reCAPTCHA**: Add Google reCAPTCHA for better spam protection
5. **Analytics**: Add Google Analytics or similar tracking

## Need Help?

- Check the main README.md for detailed documentation
- Review the Supabase documentation: https://supabase.com/docs
- Check Next.js documentation: https://nextjs.org/docs
