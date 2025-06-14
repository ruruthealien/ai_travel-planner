import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './trip'
import Header from './components/ui/custom/Header.jsx';
import { Toaster } from 'react-hot-toast'


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
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
)
