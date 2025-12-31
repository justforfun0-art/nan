# Nanofluencers.com

A modern, production-ready platform for connecting micro-influencers with brands in India.

## Features

- **Modern Landing Page**: Beautiful gradient design with smooth animations using Framer Motion
- **Influencer Application Form**: Comprehensive form with validation for collecting influencer details
- **Supabase Integration**: Secure database storage for influencer submissions
- **Admin Dashboard**: Private dashboard with authentication for viewing and managing submissions
- **Form Validation**: Client and server-side validation with URL verification for social platforms
- **Anti-Spam Protection**: Email uniqueness check to prevent duplicate submissions
- **Responsive Design**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized animations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Form Handling**: React Hook Form + Zod
- **Notifications**: React Hot Toast

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to your Supabase project: https://supabase.com/dashboard/project/tjekufdbaxafqmsyiovw
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase-schema.sql` into the SQL editor
4. Run the SQL to create the database tables and policies

### 3. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://tjekufdbaxafqmsyiovw.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

   To find your API keys:
   - Go to Project Settings → API
   - Copy the `anon` `public` key
   - Copy the `service_role` key (optional, for admin operations)

### 4. Create Admin User

To access the admin dashboard, you need to create an admin user in Supabase:

1. Go to **Authentication** → **Users** in your Supabase dashboard
2. Click **Add user** → **Create new user**
3. Enter an email and password for the admin account
4. Confirm the user (you may need to verify the email or use the auto-confirm option)

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 6. Access Admin Dashboard

Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) and login with your admin credentials.

## Project Structure

```
nanoweb/
├── app/
│   ├── admin/               # Admin section
│   │   ├── login/          # Admin login page
│   │   └── dashboard/      # Admin dashboard
│   ├── api/
│   │   └── submit/         # Form submission API endpoint
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   ├── DashboardClient.tsx # Admin dashboard component
│   └── InfluencerForm.tsx  # Influencer application form
├── lib/
│   ├── supabase/           # Supabase client utilities
│   ├── types.ts            # TypeScript types
│   └── validation.ts       # Form validation schemas
├── supabase-schema.sql     # Database schema
└── README.md
```

## Form Fields

The influencer application form captures:

- **Personal Information**: Name, email, phone/WhatsApp, city, state
- **Social Media**: Primary platform (Instagram/YouTube/Facebook), profile URL, handle, followers range
- **Categories**: Fashion, Fitness, Tech, Beauty, Food, Travel, Finance, Gaming, Parenting, Education, Auto, Home
- **Languages**: Hindi, English, Hinglish, Punjabi, Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam, Gujarati
- **Consent**: Required checkbox for data processing

## Features in Detail

### Landing Page
- Gradient background with animated shapes
- Hero section with call-to-action
- Stats display
- Benefits section
- Responsive navigation
- Modal form overlay

### Form Validation
- Client-side validation with Zod
- Server-side validation
- URL validation for Instagram/YouTube/Facebook only
- Duplicate email prevention
- Required field checks
- Category and language limits (1-5 selections)

### Admin Dashboard
- Secure authentication via Supabase Auth
- View all submissions
- Filter by status (all/pending/approved/rejected)
- Detailed submission view
- Status management (approve/reject/pending)
- Real-time statistics
- Responsive table design

### Database Schema
- Secure with Row Level Security (RLS)
- Indexes for performance
- JSONB for categories and languages
- Status tracking
- Prepared for public influencer directory (currently hidden)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables from `.env.local`
5. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Required:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key

Optional:
- `SUPABASE_SERVICE_ROLE_KEY`: For admin operations
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: reCAPTCHA site key (for enhanced spam protection)
- `RECAPTCHA_SECRET_KEY`: reCAPTCHA secret key

## Future Enhancements

- [ ] Add reCAPTCHA v3 for enhanced spam protection
- [ ] Public influencer directory page
- [ ] Advanced filtering and search in admin dashboard
- [ ] Email notifications for new submissions
- [ ] Bulk actions in admin dashboard
- [ ] Analytics and reporting
- [ ] Multi-admin support with roles

## Support

For issues or questions, please create an issue in the repository.

## License

All rights reserved - nanofluencers.com
