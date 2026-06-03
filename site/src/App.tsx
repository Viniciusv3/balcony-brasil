import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Estado from './pages/Estado'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filiais/:sigla" element={<Estado />} />
    </Routes>
  )
}
