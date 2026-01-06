import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty';
import { db } from '@/db';
import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start';
import { ListTodoIcon, PlusIcon } from 'lucide-react';

type Todo = {
    id: string;
    name: string;
    isComplete: boolean;
    createdAt: string;
    updatedAt: string;
}
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
        <div>
          <Button size="sm" asChild>
            <Link to="/todos/new">
              <PlusIcon /> Add Todo
            </Link>
          </Button>
        </div>
      </div>
      <TodoListTable todos={todos} />
  </div>
}

function TodoListTable({ todos }: { todos: Array<Todo> }) {
  if(todos.length === 0) {
    return <Empty>
      <EmptyHeader variant="icon">
        <EmptyMedia>
          <ListTodoIcon size="l" />
        </EmptyMedia>
        <EmptyTitle>No Todos Found</EmptyTitle>
        <EmptyDescription>
          You have no todos yet. Click the button below to add your first todo.
        </EmptyDescription>
      </EmptyHeader>

    </Empty>
  }
}
    
