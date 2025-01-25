import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ParsePlaylists from './Components/SpotifyAuth.tsx'
import PlaylistResponse from './Components/PlaylistResponse.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
