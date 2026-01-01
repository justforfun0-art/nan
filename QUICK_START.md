# 🚀 Quick Start - Nanofluencer.com

Your production-ready influencer platform is ready! Follow these 3 simple steps to get started:

## ⚡ Step 1: Get Your Supabase Keys (2 minutes)

1. Visit: https://supabase.com/dashboard/project/tjekufdbaxafqmsyiovw/settings/api
2. Copy these two values:
   - **URL**: `https://tjekufdbaxafqmsyiovw.supabase.co`
   - **anon public key**: Long string starting with `eyJ...`

## 📊 Step 2: Set Up the Database (1 minute)

1. Go to: https://supabase.com/dashboard/project/tjekufdbaxafqmsyiovw/sql/new
2. Open the file `supabase-schema.sql` in this folder
3. Copy ALL its content
4. Paste into Supabase SQL Editor
5. Click **RUN**

## 🔑 Step 3: Update Your API Keys (30 seconds)

1. Open `.env.local` in this folder
2. Replace `your_anon_key_here` with your actual anon key from Step 1
3. Save the file

## ✅ You're Ready!

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

## 🔐 Create an Admin Account

To access the admin dashboard:

1. Go to: https://supabase.com/dashboard/project/tjekufdbaxafqmsyiovw/auth/users
2. Click **Add user** → **Create new user**
3. Enter email: `admin@nanofluencer.com` (or any email you want)
4. Create a password
5. Toggle ON: **Auto Confirm User**
6. Click **Create user**

Now you can login at: http://localhost:3000/admin

---

## 🎨 What You Got

✅ **Beautiful Landing Page**
- Modern gradient design with animations
- Fully responsive
- Fast loading with Framer Motion animations

✅ **Influencer Application Form**
- All required fields (name, email, phone, city, state)
- Social media validation (Instagram/YouTube/Facebook URLs only)
- Category and language selection
- Consent checkbox
- Anti-spam protection

✅ **Admin Dashboard**
- Secure authentication
- View all submissions
- Filter by status (pending/approved/rejected)
- Update submission status
- View detailed influencer profiles

✅ **Supabase Database**
- Secure with Row Level Security
- Optimized with indexes
- Ready for scale

---

## 📁 Important Files

- **`.env.local`** - Your API keys (UPDATE THIS!)
- **`supabase-schema.sql`** - Database schema (RUN THIS IN SUPABASE!)
- **`README.md`** - Full documentation
- **`SETUP_GUIDE.md`** - Detailed setup instructions

---

## 🚀 Deploy to Production

When ready to deploy:

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables from `.env.local`
5. Deploy!

Your site will be live at: `https://nanofluencer.com`

---

## 📞 Need Help?

Check the detailed guides:
- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Step-by-step setup

---

**Built with Next.js 15, Tailwind CSS, Framer Motion, and Supabase**
