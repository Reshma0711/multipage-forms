import { Button } from '@/components/ui/button';
import { createFileRoute, useLoaderData,Link} from '@tanstack/react-router'

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log("Params received in loader:", params); // Debugging step
    return { postId: params.postId };
  },
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  const { postId } = useLoaderData(Route);
  return <div><div>Hello {postId}!
  </div>
  <Button><Link to="/posts">← Back to Posts</Link></Button>
  </div>
}
