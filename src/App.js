import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Admin from './pages/admin'
import Error from './pages/error'
import Private from './routes/Private'
import Networks from './pages/Networks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '/admin/social',
    element: <Private> <Networks/> </Private>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export { router };