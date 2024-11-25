import { useEffect, useState } from "react";
import Entradas from "./Navegacion";
import { NavLink } from "react-router-dom";

const Juegos = () => {
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 

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
                    body: "fields id,name, summary, cover.image_id,rating; sort rating desc; limit 300;",
                });

                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };

        fetchGames();
    }, []);

    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Entradas />
            <div className="grid grid-cols-8">
                <div className="col-span-1"></div>
                <div className="col-span-6">
                    <h1 className="text-white text-6xl">Más juegos</h1>

                    <input
                        type="text"
                        placeholder="Buscar juegos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 my-4"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-9 mt-10">
                        {filteredGames.map((game) => (
                            <div key={game.id} className="col-span-1 overflow-hidden">
                                <NavLink to="/comprobar" state={{ texto: `${game.id}`, tipo: 0 }}>
                                    <img
                                        src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`}
                                        alt={game.name}
                                        className="rounded-lg"
                                    />
                                    <p className="text-white mx-auto">{game.name}</p>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </>
    );
};

export default Juegos;
