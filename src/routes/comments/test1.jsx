import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/comments/test1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/comments/test1"!</div>
}
