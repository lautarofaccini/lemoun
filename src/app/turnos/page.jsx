"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function Turnos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("fecha"); // Criterio para ordenar
  const [turnos, setTurnos] = useState([
    {
      id: 1,
      patente: "ABC123",
      fecha: "2024-03-09",
      hora: "10:30",
      precio: 1500.0,
    },
    {
      id: 2,
      patente: "AMN221",
      fecha: "2024-08-28",
      hora: "11:00",
      precio: 1800.0,
    },
    {
      id: 3,
      patente: "GHI789",
      fecha: "2024-02-29",
      hora: "14:15",
      precio: 2000.0,
    },
    {
      id: 4,
      patente: "SFR226",
      fecha: "2024-08-22",
      hora: "09:45",
      precio: 1600.0,
    },
    {
      id: 5,
      patente: "JKJ009",
      fecha: "2024-06-12",
      hora: "16:00",
      precio: 1750.0,
    },
  ]);

  const router = useRouter();

  // Filtrar turnos según el término de búsqueda
  const filteredTurnos = turnos.filter((turno) =>
    turno.patente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenar turnos según el criterio seleccionado
  const sortedTurnos = filteredTurnos.sort((a, b) => {
    if (sortCriteria === "fecha") return new Date(a.fecha) - new Date(b.fecha);
    if (sortCriteria === "patente") return a.patente - b.patente;
    return 0;
  });

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Button variant="outline" onClick={() => router.back()}>
        Volver
      </Button>
      <h1 className="text-5xl mb-7 py-5">Buscar Turnos</h1>
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
        {sortedTurnos.map((turno) => (
          <li
            key={turno.id}
            onClick={() => router.push(`/turnos/${turno.id}`)}
            className="mb-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
          >
            <div>
              <p>
                <strong>Patente:</strong> {turno.patente}
              </p>
              <p>
                <strong>Fecha:</strong> {turno.fecha}
              </p>
              <p>
                <strong>Hora:</strong> {turno.hora}
              </p>
              <p>
                <strong>Precio:</strong> ${turno.precio.toFixed(2)}
              </p>
            </div>
          </li>
        ))}
        {sortedTurnos.length === 0 && (
          <p className="text-center text-gray-500">No se encontraron turnos.</p>
        )}
      </ul>
    </div>
  );
}

export default Turnos;
