import Entradas from "./Navegacion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
const Biblioteca = ()=>{
    const [games, setGames] = useState([]);
    useEffect(() => {
        const fetchGames = async () => {
            const accessToken = "f60h38k6futrurb7gqe522yhksxte7";
            const clientId = "q95uw5i9xvjb4bqzmyl68fawboejh0";

            try {
                const response = await fetch('https://thingproxy.freeboard.io/fetch/https://api.igdb.com/v4/games', {
                    method: "POST",
                    headers: {
                        "Client-ID": clientId,
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                    body: "fields id,name, summary, cover.image_id,rating; sort rating asc; limit 10;",
                });

                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };

        fetchGames();
    }, []);
    return (
        <>
            <Entradas />
            <div className="grid grid-cols-8 ">
                <div className="col-span-1"></div>
                <div className="col-span-6">
                <h1 className="text-white text-6xl">Mis juegos</h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-9 mt-10">
                        {games.map((game) => (
                            <div className="col-span-1  ">
                                 <NavLink to="/comprobar" state={{ texto: `${game.id}`,tipo:1 }} >
                                 <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`} alt={game.name} className="rounded-lg" />
                            </NavLink>
                            <p className="text-white mx-auto"> {game.name}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
            <Footer/>
        </>
    )
}
export default Biblioteca;