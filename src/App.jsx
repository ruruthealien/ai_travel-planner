import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Home from './components/ui/custom/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Home */ }
    <Home/>
    </>
  )
}

export default App
