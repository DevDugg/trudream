import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: NextRequest) {
  const { first_name, last_name, email, phone } = await req.json();

  const { data, error } = await supabase
    .from('users')
    .insert([{ first_name, last_name, email, phone }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
