import { NavLink } from "react-router-dom";
import { faGear, faGamepad, faBoxOpen, faHouse,faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faAtlassian } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-regular-svg-icons';


const Entradas = () => {
    return (
        <>

            <nav className="bg-black  border-t text-white md:border-t-0 fixed bottom-0 md:static w-full">
                <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">

                    <div className="hidden md:flex items-center space-x-3">

                        <div className="text-xl font-bold"><FontAwesomeIcon icon={faAtlassian} flip /> GAMES HOME</div>
                    </div>

                    <ul className="flex justify-around w-full md:w-auto md:space-x-8">
                        <li className="group relative">
                            <NavLink to="/">
                                <FontAwesomeIcon icon={faHouse} bounce className="block md:hidden text-2xl text-white px-4 py-2 group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md" />
                                <span className="hidden md:block px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md">Inicio</span>
                            </NavLink>
                        </li>
                        <li className="group relative"> 
                            <NavLink to="/biblioteca">
                                <FontAwesomeIcon icon={faBoxOpen} bounce className="block md:hidden text-2xl px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md " />
                                <span className="hidden md:block px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md">Biblioteca</span>
                            </NavLink>
                        </li>
                        <li className="group relative">
                            <NavLink to="/juegos">
                                <FontAwesomeIcon icon={faGamepad} bounce className="block md:hidden text-2xl px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md" />
                                <span className="hidden md:block px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md">Juegos</span>
                            </NavLink>
                        </li>
                        <li className="group relative">
                            <NavLink to="/soporte">
                                <FontAwesomeIcon icon={faGear} bounce className="block md:hidden text-2xl px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md" />
                                <span className="hidden md:block px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md">Soporte</span>
                            </NavLink>
                        </li>
                        <li className="group relative">
                            <NavLink to="/calificacion">
                                <FontAwesomeIcon icon={faQrcode} bounce className="block md:hidden text-2xl px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md" />
                                <span className="hidden md:block px-4 py-2 text-white group-hover:text-black group-hover:bg-white transition-all duration-300 rounded-md shadow-md">Calificacion</span>
                            </NavLink>
                        </li>
                    </ul>


                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/login">
                            <span className="text-sm">user12446435</span>
                            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                                <span className="text-black font-bold">U</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Entradas;
