"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-zinc-950 text-white py-3 mb-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="LeMoUn" className="h-20 w-auto" />
        </Link>
        <ul className="flex gap-x-4 ">
          {pathname !== "/login" && (
            <li>
              <Link
                className="w-full text-xl font-bold px-4 py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-800 transition-colors"
                href="/logout"
              >
                Cerrar Sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
