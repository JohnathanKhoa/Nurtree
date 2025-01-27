import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Views/Home';
import Login from './Views/Login';
import Playlists from './Views/Playlists';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/callback' element={<Home />} />
        <Route path='/playlists' element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  )
}
