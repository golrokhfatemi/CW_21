

import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { queryClient } from './lib/react-query'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/route'



function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}/>

    </QueryClientProvider>
  )
}

export default App
