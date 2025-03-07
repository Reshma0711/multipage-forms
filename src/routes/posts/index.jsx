import { createFileRoute, Link } from "@tanstack/react-router";


export const Route = createFileRoute("/posts/")({
  component: Posts,
});

function Posts() {
  const posts = ["post1", "post2", "post3"];
  return (
    <>
      {posts.map((post) => (
        <div key={post}>
          <Link to={`/posts/${post}`}>
            {post}
          </Link>
        </div>
      ))}
    </>
  );
}
