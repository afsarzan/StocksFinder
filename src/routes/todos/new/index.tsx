import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TodoForm } from '@/components/todo-form'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeftIcon } from 'lucide-react'


export const Route = createFileRoute('/todos/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=" container space-y-2">
      <Button asChild variant="ghost" size="sm">
        <Link to="/">
          <ArrowLeftIcon />Back to Todos
        </Link>
      </Button>
      <Card>
        <CardHeader>
            <CardTitle>Add New Todo</CardTitle>
            <CardDescription> Create a new task to add to your todo list</CardDescription>
        </CardHeader>
        <CardDescription> <TodoForm /></CardDescription>
      </Card>
    </div>
  )
}
