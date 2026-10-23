
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import LoadingScreen from './components/LoadingScreen'

function LoadingFlow() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/app', { replace: true })
    }, 2700)

    return () => clearTimeout(timer)
  }, [navigate])

  return <LoadingScreen />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/entrando" element={<LoadingFlow />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
