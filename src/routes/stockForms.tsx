import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/stockForms')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/stockForms"!</div>
}
