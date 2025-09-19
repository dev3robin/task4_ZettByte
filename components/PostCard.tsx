import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <h2 className="font-bold text-lg mb-2">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-3">
        {post.body.substring(0, 80)}...
      </p>
      <Link
        href={`/posts/${post.id}`}
        className="text-blue-600 hover:underline text-sm font-medium"
      >
        Read more →
      </Link>
    </div>
  );
}
