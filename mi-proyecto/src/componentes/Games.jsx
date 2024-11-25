import React, { useState, useEffect } from "react";

const GameList = () => {
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
                    body: "fields name, summary,cover.image_id,rating; sort rating desc; limit 80;", // nombre, descripcion, portada, limite de 10, calidicacion 
                });

                const data = await response.json();
                setGames(data); // Guarda los datos en el estado
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            <h1>Game List</h1>
            {console.log(games)}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <h2>{game.name}</h2>
                        <p>{game.summary}</p>
                        

                            <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`} alt={game.name} />
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameList;
