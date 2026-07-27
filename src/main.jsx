import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Calendar from './pages/calendar.jsx'
import PageNotFound from './pages/pageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      {index: true, element: <Home />},
      {path: "/home", element: <Home />},
      {path: "/projects", element: <Projects />},
      {path: "/calendar", element: <Calendar />},
      {path: "*", element: <PageNotFound />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
