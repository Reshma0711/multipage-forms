import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/test2")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/test2"!</div>;
}
