import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from 'react';
import Footer from './Footer';
import Entradas from "./Navegacion";

const Soporte = () => {
    const [indiceActivo, setIndiceActivo] = useState(null);
    const alternarRespuesta = (indice) => {
        setIndiceActivo(indiceActivo === indice ? null : indice);
    };

    const preguntasFrecuentes = [
        { pregunta: "1. ¿Cómo puedo crear una cuenta?", respuesta: "Para crear una cuenta en nuestra plataforma, haz clic en el botón de \"Registrarse\" en la esquina superior derecha de la página de inicio. Luego, ingresa tu dirección de correo electrónico, elige un nombre de usuario y una contraseña segura. Después, recibirás un correo de verificación para completar el proceso de registro." },
        { pregunta: "2. ¿Cómo puedo comprar juegos o contenido en la tienda?", respuesta: "Para comprar juegos o contenido en nuestra tienda, primero navega por nuestra selección de productos. Haz clic en el juego que deseas comprar y presiona el botón de \"Comprar ahora\". Después, selecciona tu método de pago preferido (tarjeta de crédito, PayPal, etc.) y sigue las instrucciones para completar la compra." },
        { pregunta: "3. ¿Cómo puedo ver mis compras anteriores?", respuesta: "Puedes ver todas tus compras anteriores accediendo a tu cuenta. Dirígete a la sección de \"Biblioteca\" en el inicio de la pagina. Allí podrás revisar los juegos que has comprado, descargar los que aún no has instalado y gestionar tus licencias." },
        { pregunta: "4. ¿Cómo puedo devolver un juego?", respuesta: "Para devolver un juego, por favor, escríbenos una solicitud en el área de texto y envíala. Ten en cuenta que el reembolso solo será posible si se solicita dentro de las dos semanas posteriores a la compra y si el tiempo de juego no excede las dos horas. Una vez recibida tu solicitud, nos encargaremos de procesar el reembolso." },
        { pregunta: "5. ¿Puedo transferir un juego a otra cuenta?", respuesta: "No, no es posible transferir un juego a otra cuenta. Una vez que se ha adquirido un juego, la compra queda asociada permanentemente a la cuenta con la que se realizó. Sin embargo, puedes compartir tu biblioteca de juegos con otros usuarios mediante las opciones de compartición de cuenta, si la plataforma lo permite." },
    ];

    return (
        <>
        <Entradas/>
        <div className="bg-black text-gray-400 flex flex-col min-h-screen">
            <main className="flex-grow p-6 font-light">
                <h1 className="text-8xl mb-6 hover:text-gray-200 transition duration-300">
                    Soporte Técnico
                </h1>
                <h2 className="text-6xl mb-4 hover:text-gray-200 transition duration-300">
                    Preguntas Frecuentes
                </h2>
                <ul className="space-y-4">
                    {preguntasFrecuentes.map((faq, indice) => (
                        <li key={indice}>
                            <button
                                className="w-full text-left py-3 text-3xl bg-transparent hover:text-gray-200 transition duration-300"
                                onClick={() => alternarRespuesta(indice)}
                            >
                                {faq.pregunta}
                            </button>
                            {indiceActivo === indice && (
                                <p className="mt-2 text-xl bg-gray-800 p-4 rounded-lg">
                                    {faq.respuesta}
                                </p>
                            )}
                            <hr className="mt-4 border-gray-600" />
                        </li>
                    ))}
                </ul>
                <h2 className="text-3xl mt-8 mb-4 hover:text-gray-200 transition duration-300">
                    ¿Tienes otra duda?
                </h2>
                <form action="#" method="post" className="space-y-4">
                    <textarea
                        name="mensaje"
                        id="mensaje"
                        rows="5"
                        placeholder="Escribe tu duda aquí..."
                        className="w-full p-4 rounded-lg bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 text-gray-100 font-light rounded-lg bg-gradient-to-r from-blue-800 to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                        Enviar
                    </button>
                </form>
            </main>
            <Footer />
        </div>
        </>
        
    );
};

export default Soporte;
