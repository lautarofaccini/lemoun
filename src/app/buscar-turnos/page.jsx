"use client";
import TarjetaTurnos from "@/components/TarjetaTurnos";
import { useRouter } from "next/navigation";
import { useState } from "react";

function BuscarTurnos() {
  const [turnos, setTurnos] = useState([
    {
      id: 1,
      patente: "ABC123",
      fecha: "2024-08-27",
      hora: "10:30",
      precio: 1500.0,
    },
    {
      id: 2,
      patente: "DEF456",
      fecha: "2024-08-28",
      hora: "11:00",
      precio: 1800.0,
    },
    {
      id: 3,
      patente: "GHI789",
      fecha: "2024-08-29",
      hora: "14:15",
      precio: 2000.0,
    },
    {
      id: 4,
      patente: "JKL012",
      fecha: "2024-08-30",
      hora: "09:45",
      precio: 1600.0,
    },
    {
      id: 5,
      patente: "MNO345",
      fecha: "2024-08-31",
      hora: "16:00",
      precio: 1750.0,
    },
  ]);
  const router = useRouter();

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-7 py-5">Buscar Turnos</h1>
      <ul className="max-w-2xl w-full">
        {turnos.map((turno) => (
            <li
            onClick={() => {
              router.push(`/buscar-turnos/${turno.id}`);
            }} 
              key={turno.id}
              className="mb-4 p-4 border border-gray-300 rounded-lg"
            >
              <TarjetaTurnos turno={turno} href="/"></TarjetaTurnos>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default BuscarTurnos;
