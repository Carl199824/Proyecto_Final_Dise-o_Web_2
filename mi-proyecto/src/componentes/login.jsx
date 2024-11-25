import React, { useState } from "react";

const Login = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);

    const registerUser = (e) => {
        e.preventDefault();
        if (username && password) {
            setUsers([...users, { username, password }]);
            setUsername("");
            setPassword("");
            setRegistered(true);
            alert("Usuario registrado con éxito");
        } else {
            alert("Debe ingresar todos los campos.");
        }
    };

    const loginUser = (e) => {
        e.preventDefault();
        const userFound = users.find(user => user.username === username && user.password === password);

        if (userFound) {
            alert("Login exitoso!");
        } else {
            alert("Nombre de usuario, correo electrónico o frase incorrectos.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{background: 'linear-gradient(to top, #0bff8c, #00bcd4, #233f67, #000000, #000000)'}}>
            <div className="bg-transparent shadow-md rounded-lg p-10 w-full max-w-md">
                <h2 className="text-5xl font-bold mb-8 text-center text-white">
                    {registered ? "Iniciar sesión" : "Registrarse"}
                </h2>
                <form onSubmit={registered ? loginUser : registerUser} className="space-y-8">
                    <div className="relative">
                        <label htmlFor="username" className="block text-xl font-medium text-white mb-2">
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-gray-200 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Nombre de usuario"
                            required
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="block text-xl font-medium text-white mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-200 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-1xl w-full bg-transparent text-white py-3 px-6 border-4 border-white rounded-md shadow-sm hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {registered ? "Iniciar sesión" : "Registrarse"}
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-white text-2xl">
                        {registered ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
                        <button
                            onClick={() => setRegistered(!registered)}
                            className="text-gray-100 hover:text-white ml-1 text-2xl hover:bg-slate-700 px-4 py-2 rounded-md transition-all duration-300"
                        >
                            {registered ? "Regístrate" : "Inicia sesión"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
