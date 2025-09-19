"use client";
import { useParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";

type Post = {
  id: number;
  title: string;
  body: string;
};


export default function PostDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const { data: post, loading } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">
        Loading...
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mt-4 mb-4 font-medium text-2xl text-white">
        Post ID: <span className="font-medium">{post?.id}</span>
      </div>
      <div className="relative rounded-xl p-1 neon-border overflow-hidden shadow-lg">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-inner">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {post?.title}
          </h1>
          <p className="text-gray-700 text-lg">{post?.body}</p>
        </div>
      </div>

      {/* Neon Border Animation Styles */}
      <style jsx>{`
        .neon-border {
          background: linear-gradient(
            270deg,
            #ff00cc,
            #3333ff,
            #00ff99,
            #ffcc00
          );
          background-size: 800% 800%;
          animation: neonGlow 6s ease infinite;
        }

        @keyframes neonGlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
