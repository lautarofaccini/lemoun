 "use client";

 import { Button } from "@/components/ui/button";
 import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const name = "Mika Swift";
  const address = "Avenida Laprida 557, Resistencia-Chaco";
  const email = "mika.swift@gmail.com";
  const router = useRouter();

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-2xl font-bold">¡Bienvenido Administrador!</h1>
      <div className="space-y-4 shadow-md rounded-lg p-6">
        </div>
      <div className="flex-1 px-3 py-2 border border-gray-300 rounded-lg mb-4 sm:mb-0 sm:mr-4">
        <div className="space-y-6">
          {/* Campo de Nombre */}
          <div>
            <label className="grid grid-cols-4 gap-4 font-bold text-sm text-gray-500 mb-2">Nombre y Apellido</label>
            <p className="flex-1 px-3 py-2 border border-gray-300 rounded-lg mb-4 sm:mb-0 sm:mr-4">
              {name}
            </p>
          </div>

          {/* Campo de Dirección */}
          <div>
            <label className="grid grid-cols-4 gap-4 font-bold text-sm text-gray-500 mb-2">Dirección</label>
            <p className="flex-1 px-3 py-2 border border-gray-300 rounded-lg mb-4 sm:mb-0 sm:mr-4">
              {address}
            </p>
          </div>

          {/* Campo de Correo */}
          <div>
            <label className="grid grid-cols-4 gap-4 font-bold text-sm text-gray-500 mb-2">Correo Electrónico</label>
            <p className="flex-1 px-3 py-2 border border-gray-300 rounded-lg mb-4 sm:mb-0 sm:mr-4">
              {email}
            </p>
          </div>
        </div>
        <Button variant="outline" onClick={() => router.push("/")}>
            Volver
        </Button>
      </div>
    </div>
  );
}
