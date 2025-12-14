import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 30,
    cacheTime: 1000 * 60,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message} </p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch</button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
