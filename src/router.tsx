import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    defaultNotFoundComponent: () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
        </div>
      )
    },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
