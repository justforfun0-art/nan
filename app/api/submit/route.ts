import { NextResponse } from "next/server";
import { influencerFormSchema } from "@/lib/validation";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1️⃣ Validate input
    const parsed = influencerFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 2️⃣ Insert into Supabase (exact table)
    const supabase = await createClient();

const { data: inserted, error } = await supabase
  .from("influencer_submissions")
  .insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    city: data.city,
    state: data.state,
    primary_platform: data.primary_platform,
    profile_url: data.profile_url,
    profile_handle: data.profile_handle,
    followers_range: data.followers_range,
    categories: data.categories ?? [],
    languages: data.languages ?? [],
    consent_given: data.consent_given,
  })
  .select("id")
  .single();


    // 3️⃣ Handle Supabase errors
    if (error) {
      // Unique email constraint
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "An application with this email already exists." },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", JSON.stringify(error, null, 2));
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Error details:", error.details);

      return NextResponse.json(
        { error: `Failed to submit: ${error.message || "Database error"}` },
        { status: 500 }
      );
    }

    // 4️⃣ Success response
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        id: inserted.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Submit API crash:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
