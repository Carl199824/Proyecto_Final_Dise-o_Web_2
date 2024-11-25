import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <>
            <footer className=" md:bg-black w-full md:relative">
                <div className="container mx-auto p-0 md:p-8 xl:px-0">
                    <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-4">
                                <div>
                                    <a href="/">
                                        <div className="flex items-center space-x-2 text-2xl font-medium">
                                            <span className="text-white">LA CASA DEL JUEGO</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex space-x-2">
                                <a href=""><FontAwesomeIcon icon={faFacebook} className='text-4xl text-white hover:text-blue-500 transition duration-500' /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} className='text-4xl text-white px-3 hover:text-red-500 transition duration-500'/></a>
                                <a href=""><FontAwesomeIcon icon={faSquareXTwitter} className='text-4xl text-white px-1 hover:text-sky-500 transition duration-500'/></a>
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-md font-semibold leading-6 text-white">Nuestros</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="/aiplatform" className="text-md leading-6 text-gray-300 hover:text-gray-50">Algoritmos</a>
                                            </li>
                                            <li>
                                                <a href="/aialgorithms" className="text-md leading-6 text-gray-300 hover:text-gray-50">Juegos</a>
                                            </li>
                                            <li>
                                                <a href="/industryapplications" className="text-md leading-6 text-gray-300 hover:text-gray-50">Plataforma</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <h3 className="text-md font-semibold leading-6 text-white">Casos de Uso</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="/predictiveanalysis" className="text-md leading-6 text-gray-300 hover:text-gray-50">Análisis</a>
                                            </li>
                                            <li>
                                                <a href="/customerexperience" className="text-md leading-6 text-gray-300 hover:text-gray-50">Experiencia del Cliente</a>
                                            </li>
                                            <li>
                                                <a href="/automation" className="text-md leading-6 text-gray-300 hover:text-gray-50">Automatización</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-md font-semibold leading-6 text-white">Recursos</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="/pricing" className="text-md leading-6 text-gray-300 hover:text-gray-50">Precios</a>
                                            </li>
                                            <li>
                                                <a href="/blog" className="text-md leading-6 text-gray-300 hover:text-gray-50">Blog</a>
                                            </li>
                                            <li>
                                                <a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">Términos del Servicio</a>
                                            </li>
                                            <li>
                                                <a href="/privacy" className="text-md leading-6 text-gray-300 hover:text-gray-50">Política de Privacidad</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <h3 className="text-md font-semibold leading-6 text-white">Compañía</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="/aboutus" className="text-md leading-6 text-gray-300 hover:text-gray-50">Sobre Nosotros</a>
                                            </li>
                                            <li>
                                                <a href="/contactus" className="text-md leading-6 text-gray-300 hover:text-gray-50">Contáctanos</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 border-t border-gray-100/30 pt-8  sm:mt-20 lg:mt-24">
                            <div className="text-md text-center md:text-white">
                                Copyright © 2024 . Creado por
                                <span className="text-gray-50"></span> entusiastas de los juegos en
                                <a rel="noopener" href="/"> Red.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
