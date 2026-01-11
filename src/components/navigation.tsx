import { Link } from "@tanstack/react-router";

export function Navigation() {

 
  return (
    <nav className="relative w-full bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
  <div className="mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
     
      <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
        <div className="flex shrink-0 items-center">
          <strong>Tanstack- start</strong>
        </div>
        <div className="hidden sm:ml-12 sm:block">
          <div className="flex space-x-4">
            <Link to="/" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Dashboard</Link> 
            <Link to="/stockForms" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">StockForms</Link> 
            {/* <a href="#" aria-current="page" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a> */}
          </div>
        </div>
      </div>    
    </div>
  </div>

</nav>

  )
}