import { Badge } from '@/components/ui/badge';
import { db } from '@/db';
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start';

const serverLoader = createServerFn( {method: 'GET'}).handler( () => {
  return db.query.todos.findMany()
})


export const Route = createFileRoute('/')({ component: App,
  loader: () => {
    return serverLoader();
  }
 })

function App() {
  const todos = Route.useLoaderData();
  const totalCount = todos.length;
  const completedCount = todos.filter(todo => todo.isComplete).length

  return <div className="min-h-screen container space-y-8">
    <div className="flex justify-between items-center gap-4">
      <div className="space-y-2">
        <h1 className='text-4xl font-bold'>Todo List</h1>
        {
          totalCount > 0 ? (
           <Badge variant="outline">
            {completedCount} of {totalCount} completed
           </Badge>
          ) : (
            <p className="text-lg">No todos found.</p>
          ) 
        }
      </div>
      </div>
  </div>
}
