import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({ component: App,
  loader: () => {
    return { message: 'Hello from the loader!' }
  }
 })

function App() {
  const data = Route.useLoaderData<{ message: string }>();
  return <div> {data.message} </div>
}
