import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Views/Home';
import Login from './Views/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/callback' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
