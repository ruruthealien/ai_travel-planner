import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './trip'
import Header from './components/ui/custom/Header.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
{
  path: '/trip',
  element: <CreateTrip />,
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
