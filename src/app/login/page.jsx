"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // Establece la cookie de autenticación
    Cookies.set("authToken", "your-auth-token", { path: "/", expires: 1 }); // 1 día

    // Redirige al dashboard con una recarga completa para garantizar que el middleware detecte la cookie
    router.replace("/");
    window.location.reload();
  };

  return (
    <section className="h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6">
        <h1 className="text-3xl mb-7 py-5 text-center">Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Acceder
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
