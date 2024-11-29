"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Borra la cookie de autenticación
    document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    // Recarga la página para asegurar que todo el estado de la sesión se limpia
    router.replace("/login");
    router.refresh(); // Fuerza la recarga de la página
  }, [router]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <p className="text-xl font-semibold">Cerrando sesión...</p>
    </div>
  );
}

export default LogoutPage;
