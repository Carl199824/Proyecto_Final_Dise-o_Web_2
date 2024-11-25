import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Entradas from "./Navegacion";
import { faPlay, faDollarSign, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from "./Footer";


const Comprobar = () => {
    const location = useLocation();
    const { texto, tipo } = location.state;
    const [game, setGame] = useState(null);
    const [expandir, setexpandir] = useState(false);
    const [modal, setmodal] = useState(false);
    const maximo = 300;
    useEffect(() => {
        if (!texto) return;

        const fetchGame = async () => {
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
                    body: `fields name,total_rating_count, summary,genres.name,age_ratings.category,category,release_dates.date,screenshots.image_id, cover.image_id, videos.video_id,platforms.platform_logo.url,platforms.platform_logo.animated,platforms.platform_logo.image_id,platforms.name, rating; where id = ${texto};`,
                });

                const data = await response.json();
                setGame(data[0]);
            } catch (error) {
                console.error("Error fetching game:", error);
            }
        };

        fetchGame();
    }, [texto]);

    return (
        <>
            <Entradas />
            {console.log(game)}

            {texto ? (
                game ? (
                    <div>
                        <div className="w-full h-[900px] relative">
                            <div className="w-5/6 mx-auto h-full relative">
                                <img
                                    src={`https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`}
                                    className="w-full h-full mx-auto"
                                    alt={game.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/100 grid grid-cols-2 grid-rows-4">
                                    <div className="col-span-2 row-span-3 "></div>
                                    <div className="col-span-2 row-span-1  grid grid-rows-4 grid-cols-2 ">
                                        <div className="col-span-2 md:col-span-1 row-span-1">
                                            <h1 className="text-white text-4xl px-10">{game.name}</h1>
                                        </div>
                                        <div className="col-span-2 row-span-3 px-10">
                                            <p className="text-white ">
                                                {game.summary.length > maximo ? `${game.summary.slice(0, maximo)}...` : game.summary}
                                            </p>
                                            {game.summary.length > maximo && (
                                                <div className="group">
                                                    <button onClick={() => setmodal(true)} className="px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md">leer mas</button>

                                                </div>

                                            )}
                                            {modal && (
                                                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center w-4/6 mx-auto">
                                                    <div className="bg-white p-6 rounded-lg w-full mx-auto">
                                                        <h1 className="bg-black text-white px-4 py-2 rounded-md">Informacion Completa de {game.name}</h1>
                                                        <p className="mb-4">{game.summary}</p>
                                                        <button onClick={() => setmodal(false)} className="bg-black rounded-md text-white p-5">cerrar</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t w-4/6 mx-auto mt-10 border-white"></div>
                        <div className="grid grid-cols-2 md:grid-cols-6">
                            <div className="hidden md:block md:col-span-1"></div>
                            <div className="col-span-1  mt-10">
                                <div className="grid grid-cols-2 md:grid-rows-2">
                                    <div className="col-span-1 row-span-2 mx-auto ">
                                        <FontAwesomeIcon icon={faPlay} beat className="text-white md:text-4xl" />
                                    </div>
                                    <div className="col-span-1">
                                        <div className="row-span-1 ">
                                            <h1 className="text-white">Categoria</h1>
                                        </div>
                                        <div className="row-span-1">
                                            {game.genres.map((gam) => (
                                                <p className="text-white"> {gam.name}</p>

                                            ))}
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
                                            <h1 className="text-white">Precio</h1>
                                        </div>
                                        <div className="row-span-1">
                                            <p className="text-white"> 200 Bs</p>
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
                                            <p className="text-white"> {game.total_rating_count}<FontAwesomeIcon icon={faStar} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 mt-10 mx-auto">
                                {tipo === 0 ? <button className="px-6 py-2 text-gray-100 font-light rounded-lg bg-gradient-to-r from-blue-800 to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400">Comprar</button> : <button className="px-6 py-2 text-gray-100 font-light rounded-lg bg-gradient-to-r from-blue-800 to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400">Jugar</button>

                                }

                            </div>
                            <div className="md:col-span-1"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-5/6 mx-auto">
                            {game.screenshots.map((gam) => (

                                <div className="col-span-1">
                                    <img src={`https://images.igdb.com/igdb/image/upload/t_720p/${gam.image_id}.jpg`} className="rounded-lg" />
                                </div>
                            ))}

                        </div>
                        <div className="w-5/6 mx-auto items-center justify-center">
                            {game.videos && game.videos.length > 0 && (
                                <div className="mt-5 grid  md:grid-cols-2  md:gap-8">
                                    {/* <iframe
                                        width="560"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${game.videos[0].video_id}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe> */}
                                    <div className="col-span-1">
                                        <lite-youtube videoid={`${game.videos[0].video_id}`} className="rounded-lg"></lite-youtube>
                                    </div>
                                    <div className="col-span-1 mt-5">
                                        <h1 className="text-white text-4xl"> Plataformas</h1>
                                        <div className="mt-5 grid grid-cols-3 md:grid-cols-4">
                                            {game.platforms.map((gam) => (
                                                <>
                                                    <div className="col-span-1">
                                                        <img src={`http://${gam.platform_logo.url}`} className="rounded-3xl" />
                                                        <p className="text-white">{gam.name} </p>
                                                    </div>

                                                </>
                                            ))}

                                        </div>

                                    </div>


                                </div>
                            )
                            }
                        </div>





                    </div>
                ) : (
                    <p className="text-white">Cargando información del juego...</p>
                )
            ) : (
                <p className="text-white">No se recibió texto para buscar.</p>
            )}
            <Footer />
        </>
    );
};

export default Comprobar;
