import React, { useState, useEffect } from "react";
import Entradas from "./Navegacion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-regular-svg-icons';
import { faPlay, faDollarSign, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
import Footer from "./Footer";
const Home = () => {
    const [games, setGames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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
                    body: `
                    fields name,genres.name,total_rating_count,summary,category,cover.image_id,rating; 
                    sort rating desc; 
                    where genres.name = "Action" | genres.name = "Adventure" | genres.name = "Shooter"; 
                    limit 15;
                `                });

                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        };

        fetchGames();
    }, []);


    const carouselItems = document.getElementById('carousel-items');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex1 = 0;
    const totalItems = items.length;

    const moveToNext = () => {
        currentIndex1 = (currentIndex1 + 1) % totalItems;
        carouselItems.style.transform = `translateX(-${currentIndex1 * 100}%)`;
    };

    setInterval(moveToNext, 3000);
    return (
        <>
            <Entradas />
            {console.log(games)}
            {games.length > 0 && (
                <div className="relative">
                    <div id="default-carousel" className="mx-auto overflow-hidden w-full h-[900px]">
                        <div className="mt-8 relative h-full md:h-full flex transition-all duration-1000 ease-in-out" id="carousel-items">
                            {games.map((game, index) => (

                                <div key={index} className="carousel-item flex-shrink-0 w-full relative h-5/6">
                                    <img
                                        src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`}
                                        className="w-5/6 h-full mx-auto"
                                        alt={`Image ${index + 1}`}

                                    />


                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/100 flex items-center justify-center ">

                                    </div>
                                    <div className="h-1/6">
                                        <div className="border-t w-4/6 mx-auto border-white"></div>
                                        <div className="grid grid-cols-3 md:grid-cols-5 grid-rows-2">
                                            <div className="hidden md:block md:col-span-1 "></div>
                                            <div className="col-span-1  mt-10">
                                                <div className="grid grid-cols-2 grid-rows-2">
                                                    <div className="col-span-1 row-span-2 mx-auto">
                                                        <FontAwesomeIcon icon={faPlay} beat className="text-white md:text-4xl" />
                                                    </div>
                                                    <div className="col-span-1">
                                                        <div className="row-span-1">
                                                            <h1 className="text-white">Categoria</h1>
                                                        </div>
                                                        <div className="row-span-1">
                                                            <p className="text-white"> Aventura</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1 mt-10">
                                                <div className="grid grid-cols-2 grid-rows-2">
                                                    <div className="col-span-1 row-span-2 mx-auto">
                                                        <FontAwesomeIcon icon={faDollarSign} beat className="text-white md:text-4xl" />

                                                    </div>
                                                    <div className="col-span-1">
                                                        <div className="row-span-1">
                                                            <h1 className="text-white">Precio 200</h1>
                                                        </div>
                                                        <div className="row-span-1">

                                                            <p className="text-white"> {game.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1 mt-10">
                                                <div className="grid grid-cols-2 grid-rows-2">
                                                    <div className="col-span-1 row-span-2 mx-auto">
                                                        <FontAwesomeIcon icon={faHeart} beat className="text-white md:text-4xl" />

                                                    </div>
                                                    <div className="col-span-1">
                                                        <div className="row-span-1">
                                                            <h1 className="text-white">Popularidad</h1>
                                                        </div>
                                                        <div className="row-span-1">
                                                            <p className="text-white md:text-lg"> {game.total_rating_count} <FontAwesomeIcon icon={faStar} /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block md:col-span-1"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Home;
