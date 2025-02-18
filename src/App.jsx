import './App.css'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'

function App() {
  const Explorer = lazy(()=>import('./components/Explorer'))

  return (
    <>
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/explorer' element={<Explorer />} />
    </Routes>
    </Suspense>
    
    </>
  )
}

export default App
