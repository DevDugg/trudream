// pages/api/addUser.js
import { supabase } from '@/lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone }: User = req.body;

    // Вставка данных в таблицу
    const { data, error } = await supabase.from('users').insert([
      {
        name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        created_at: new Date(),
      },
    ]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ data });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
