"use client";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-zinc-950 text-white py-3 mb-2">
      <div className="container mx-auto flex items-center justify-between">
        <h3 className="font-bold text-3xl  text-sky-100 hover:text-white">
          <Link href="/">LeMoUn</Link>
        </h3>
        <ul className="flex gap-x-4 text-2xl font-bold text-sky-500">
          <li>
            <Link href="/buscar-turnos" className=" hover:text-sky-400">
              Buscar Turnos
            </Link>
          </li>
          <li>
            <Link href="/login" className=" hover:text-sky-400">
              Cerrar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
