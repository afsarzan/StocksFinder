// In your router setup file
import { routeTree } from '@/routeTree.gen'
import { createRouter } from '@tanstack/react-router'

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  ),
})