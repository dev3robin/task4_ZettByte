'use client';

import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch');
        const json: T = await res.json();
        setData(json);
      } catch (err) {
        console.log('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
}
