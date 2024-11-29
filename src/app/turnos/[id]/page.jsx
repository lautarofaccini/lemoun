"use client";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function TurnoDetalles() {
  const { id } = useParams();
  const router = useRouter();
  const [turno, setTurno] = useState(null);
  const [vehiculo, setVehiculo] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const turnos = [
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
    ];

    const vehiculos = [
      {
        patente: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        tipo: "Sedán",
        categoria: "Compacto",
        dniCliente: "12345678",
      },
      {
        patente: "DEF456",
        marca: "Honda",
        modelo: "Civic",
        tipo: "Sedán",
        categoria: "Compacto",
        dniCliente: "23456789",
      },
      {
        patente: "GHI789",
        marca: "Ford",
        modelo: "Mustang",
        tipo: "Coupé",
        categoria: "Deportivo",
        dniCliente: "34567890",
      },
    ];

    const clientes = [
      { dni: "12345678", nombre: "Juan", apellido: "Pérez" },
      { dni: "23456789", nombre: "Ana", apellido: "Gómez" },
      { dni: "34567890", nombre: "Luis", apellido: "Martínez" },
    ];

    const foundTurno = turnos.find((t) => t.id === parseInt(id));
    if (foundTurno) {
      setTurno(foundTurno);

      const foundVehiculo = vehiculos.find(
        (v) => v.patente === foundTurno.patente
      );
      if (foundVehiculo) {
        setVehiculo(foundVehiculo);

        const foundCliente = clientes.find(
          (c) => c.dni === foundVehiculo.dniCliente
        );
        if (foundCliente) {
          setCliente(foundCliente);
        }
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-10 flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardContent>
            <p>Cargando detalles del turno...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!turno || !vehiculo || !cliente) {
    return (
      <div className="container mx-auto py-10 flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardContent>
            <p>No se encontraron datos para el turno seleccionado.</p>
            <Button variant="outline" onClick={() => router.back()}>
              Volver
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Detalles del Turno
          </CardTitle>
          <CardDescription>
            Información detallada del turno, vehículo y cliente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Turno */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Turno</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div>
                  <dt className="font-medium">Patente:</dt>
                  <dd>{turno.patente}</dd>
                </div>
                <div>
                  <dt className="font-medium">Fecha:</dt>
                  <dd>{turno.fecha}</dd>
                </div>
                <div>
                  <dt className="font-medium">Hora:</dt>
                  <dd>{turno.hora}</dd>
                </div>
                <div>
                  <dt className="font-medium">Precio:</dt>
                  <dd>${turno.precio.toFixed(2)}</dd>
                </div>
              </dl>
            </div>

            {/* Vehículo */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Vehículo</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div>
                  <dt className="font-medium">Marca:</dt>
                  <dd>{vehiculo.marca}</dd>
                </div>
                <div>
                  <dt className="font-medium">Modelo:</dt>
                  <dd>{vehiculo.modelo}</dd>
                </div>
                <div>
                  <dt className="font-medium">Tipo:</dt>
                  <dd>{vehiculo.tipo}</dd>
                </div>
                <div>
                  <dt className="font-medium">Categoría:</dt>
                  <dd>{vehiculo.categoria}</dd>
                </div>
                <div>
                  <dt className="font-medium">Año:</dt>
                  <dd>{vehiculo.año}</dd>
                </div>
              </dl>
            </div>

            {/* Cliente */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Cliente</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div>
                  <dt className="font-medium">DNI:</dt>
                  <dd>{cliente.dni}</dd>
                </div>
                <div>
                  <dt className="font-medium">Nombre:</dt>
                  <dd>{cliente.nombre}</dd>
                </div>
                <div>
                  <dt className="font-medium">Apellido:</dt>
                  <dd>{cliente.apellido}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="outline" onClick={() => router.back()}>
              Volver
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TurnoDetalles;