import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AddProduto from './pages/AddProduto'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-produto" element={<AddProduto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
