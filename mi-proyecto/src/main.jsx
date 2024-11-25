import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GameList from './componentes/games'
import Entradas from './componentes/Navegacion'
import MisRoutes from './Routes'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <GameList/> */}
    {/* <Entradas/> */}
    <MisRoutes/>
  </StrictMode>,
)
