'use client';

import { motion } from 'framer-motion';
import useFetch from '@/hooks/useFetch';
import PostCard from '@/components/PostCard';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const { data: posts, loading } = useFetch<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (loading)
    return (
      <p className="text-white text-center mt-10 text-lg font-medium">
        Loading...
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-8 text-center md:text-left">
        Posts
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
