import { BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./componentes/Home";
import Biblioteca from "./componentes/Biblioteca";
import Juegos from "./componentes/Juegos";
import Soporte from "./componentes/Soporte";
import GameList from "./componentes/games";
import CardGame from "./componentes/Card";
import Comprobar from "./componentes/Comprobar";
import Login from "./componentes/login";
import Calificacion from "./componentes/Calificacion";

const MisRoutes = () =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/biblioteca" element = {<Biblioteca/>}/>
        <Route path = "/juegos" element = {<Juegos/>}/>
        <Route path = "/soporte" element = {<Soporte/>}/>
        <Route path = "/prueba" element = {<GameList/>}/>
        <Route path = "/prueba2" element = {<CardGame/>}/>
        <Route path = "/comprobar" element = {<Comprobar/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/calificacion" element = {<Calificacion/>}/>








        </Routes>
        </BrowserRouter>
    )
}
export default MisRoutes;