import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { influencerFormSchema } from '@/lib/validation';

// Create a Supabase client with the service role key for server-side operations
// This allows bypassing RLS policies if needed
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Using anon key since we have RLS policy for inserts
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = influencerFormSchema.parse(body);

    // Basic spam prevention: check if email already exists
    const { data: existing, error: checkError } = await supabaseAdmin
      .from('influencer_submissions')
      .select('id')
      .eq('email', validatedData.email)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'An application with this email already exists' },
        { status: 400 }
      );
    }

    // Insert the submission into the database
    const { data, error } = await supabaseAdmin
      .from('influencer_submissions')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          city: validatedData.city,
          state: validatedData.state,
          primary_platform: validatedData.primary_platform,
          profile_url: validatedData.profile_url,
          profile_handle: validatedData.profile_handle,
          followers_range: validatedData.followers_range,
          categories: validatedData.categories,
          languages: validatedData.languages,
          consent_given: validatedData.consent_given,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        id: data.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Submission error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data. Please check your inputs.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
