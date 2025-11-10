'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('hello').select('*');
      if (error) setError(error.message);
      else setRows(data ?? []);
    })();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl w-full space-y-4">
        <h1 className="text-3xl font-bold">Nexum Labs</h1>
        <p className="opacity-70">Vercel + Supabase + Cloudflare stack is live.</p>
        {error && <p className="text-red-500">DB error: {error}</p>}
        {!error && (
          <pre className="text-sm p-3 rounded bg-gray-100/10 border border-white/10 overflow-x-auto">
{JSON.stringify(rows, null, 2)}
          </pre>
        )}
      </div>
    </main>
  );
}
