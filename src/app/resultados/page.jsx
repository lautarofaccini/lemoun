"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function BuscarResultadosRTO() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("fecha");
  const [resultados, setResultados] = useState([
    {
      codigoRTO: "RTO001",
      fechaRev: "2024-12-10",
      patente: "ABB123",
      resultado: "Aprobada",
      monto: 2500,
      estadoPago: "Pagada",
    },
    {
      codigoRTO: "RTO002",
      fechaRev: "2023-02-09",
      patente: "ZEC456",
      resultado: "Aprobada",
      monto: 1200,
      estadoPago: "Sin pagar",
    },
    {
      codigoRTO: "RTO003",
      fechaRev: "2024-01-11",
      patente: "JAK221",
      resultado: "Aprobada",
      monto: 3000,
      estadoPago: "Sin pagar",
    },
  ]);

  const router = useRouter();

  // Filtrar resultados según el término de búsqueda
  const filteredResultados = resultados.filter((resultado) =>
    resultado.patente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenar resultados según el criterio seleccionado
  const sortedResultados = filteredResultados.sort((a, b) => {
    if (sortCriteria === "fecha")
      return new Date(a.fechaRev) - new Date(b.fechaRev);
    if (sortCriteria === "patente") return a.patente.localeCompare(b.patente);
    return 0;
  });

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-7 py-5">Resultados del RTO</h1>
      <div className="mb-6 w-full max-w-md flex items-center gap-4">
        <input
          type="text"
          placeholder="Buscar por patente..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-3 py-2 border border-gray-300 rounded-lg"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="fecha">Ordenar por Fecha</option>
          <option value="patente">Ordenar por Patente</option>
        </select>
      </div>
      <ul className="max-w-2xl w-full">
        {sortedResultados.map((resultado) => (
          <li
            key={resultado.id}
            onClick={() => router.push(`/resultados/${resultado.codigoRTO}`)}
            className="mb-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
          >
            <div>
              <p>
                <strong>Patente:</strong> {resultado.patente}
              </p>
              <p>
                <strong>Código RTO:</strong> {resultado.codigoRTO}
              </p>
              <p>
                <strong>Fecha de revisión:</strong> {resultado.fechaRev}
              </p>
              <p>
                <strong>Resultado:</strong> {resultado.resultado}
              </p>
              <p>
                <strong>Monto:</strong> ${resultado.monto.toFixed(2)}
              </p>
            </div>
            <div className="text-right">
                  <Button
                    onClick={() =>
                      router.push(`/resultados/${resultado.codigoRTO}`)
                    }
                  >
                    Ver
                  </Button>
              </div>
          </li>
        ))}
        {sortedResultados.length === 0 && (
          <p className="text-center text-gray-500">
            No se encontraron resultados.
          </p>
        )}
      </ul>
      <Button variant="outline" onClick={() => router.back()}>
        Volver
      </Button>
    </div>
  );
}

export default BuscarResultadosRTO;
