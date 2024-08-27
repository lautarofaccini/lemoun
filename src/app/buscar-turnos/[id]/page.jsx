"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

function TurnoDetalles() {
  const { id } = useParams();
  const [turno, setTurno] = useState(null);
  const [vehiculo, setVehiculo] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const turnos = [
      { id: 1, patente: "ABC123", fecha: "2024-08-27", hora: "10:30", precio: 1500.0 },
      { id: 2, patente: "DEF456", fecha: "2024-08-28", hora: "11:00", precio: 1800.0 },
      { id: 3, patente: "GHI789", fecha: "2024-08-29", hora: "14:15", precio: 2000.0 },
      { id: 4, patente: "JKL012", fecha: "2024-08-30", hora: "09:45", precio: 1600.0 },
      { id: 5, patente: "MNO345", fecha: "2024-08-31", hora: "16:00", precio: 1750.0 },
    ];

    const vehiculos = [
      { patente: "ABC123", marca: "Toyota", modelo: "Corolla", tipo: "Sedán", categoria: "Compacto", dniCliente: "12345678" },
      { patente: "DEF456", marca: "Honda", modelo: "Civic", tipo: "Sedán", categoria: "Compacto", dniCliente: "23456789" },
      { patente: "GHI789", marca: "Ford", modelo: "Mustang", tipo: "Coupé", categoria: "Deportivo", dniCliente: "34567890" },
      { patente: "JKL012", marca: "Chevrolet", modelo: "Camaro", tipo: "Coupé", categoria: "Deportivo", dniCliente: "45678901" },
      { patente: "MNO345", marca: "Volkswagen", modelo: "Golf", tipo: "Hatchback", categoria: "Compacto", dniCliente: "56789012" },
    ];

    const clientes = [
      { dni: "12345678", nombre: "Juan", apellido: "Pérez" },
      { dni: "23456789", nombre: "Ana", apellido: "Gómez" },
      { dni: "34567890", nombre: "Luis", apellido: "Martínez" },
      { dni: "45678901", nombre: "Marta", apellido: "Rodríguez" },
      { dni: "56789012", nombre: "Carlos", apellido: "Fernández" },
    ];

    // Buscar el turno por id
    const foundTurno = turnos.find((turno) => turno.id === parseInt(id));
    if (foundTurno) {
      setTurno(foundTurno);

      // Buscar el vehículo por patente
      const foundVehiculo = vehiculos.find((vehiculo) => vehiculo.patente === foundTurno.patente);
      if (foundVehiculo) {
        setVehiculo(foundVehiculo);

        // Buscar el cliente por DNI
        const foundCliente = clientes.find((cliente) => cliente.dni === foundVehiculo.dniCliente);
        if (foundCliente) {
          setCliente(foundCliente);
        }
      }
    }
    setLoading(false)
    
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-7 py-5">Detalles del Turno</h1>
      <div className="mb-4 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl mb-4">Turno</h2>
        <p><strong>Patente:</strong> {turno.patente}</p>
        <p><strong>Fecha:</strong> {turno.fecha}</p>
        <p><strong>Hora:</strong> {turno.hora}</p>
        <p><strong>Precio:</strong> ${turno.precio.toFixed(2)}</p>
      </div>
      <div className="mb-4 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl mb-4">Vehículo</h2>
        <p><strong>Marca:</strong> {vehiculo.marca}</p>
        <p><strong>Modelo:</strong> {vehiculo.modelo}</p>
        <p><strong>Tipo:</strong> {vehiculo.tipo}</p>
        <p><strong>Categoría:</strong> {vehiculo.categoria}</p>
        <p><strong>Patente:</strong> {vehiculo.patente}</p>
      </div>
      <div className="mb-4 p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl mb-4">Cliente</h2>
        <p><strong>DNI:</strong> {cliente.dni}</p>
        <p><strong>Nombre:</strong> {cliente.nombre}</p>
        <p><strong>Apellido:</strong> {cliente.apellido}</p>
      </div>
    </div>
  );
}

export default TurnoDetalles;