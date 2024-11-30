"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-zinc-950 text-white py-3 mb-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo principal */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="LeMoUn" className="h-20 w-auto" />
        </Link>

        {/* Menú */}
        <ul className="flex items-center gap-x-6 relative">
          {/* Mostrar el logo de usuario y el botón "Cerrar Sesión" solo si no estamos en la página de login */}
          {pathname !== "/login" && (
            <>
              {/* Logo de usuario con menú desplegable */}
              <li className="relative">
                <button
                  className="flex items-center focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img
                    src="/user-avatar.png" // Ruta del logo de usuario
                    alt="Usuario"
                    className="h-10 w-10 rounded-full border-2 border-gray-300"
                  />
                  {/* Texto debajo del logo */}
                  <span className="text-sm mt-1">Perfil</span>

                  {/* Opcional: un ícono para indicar que el menú es desplegable */}
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Menú desplegable */}
                {isMenuOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden z-10">
                    <li>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Mi Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/logout"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Cerrar Sesión
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
