"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Datos inventados
const facturas = [
  {
    codigoRTO: "RTO001",
    fechaRev: "2024-01-10",
    patente: "ABC123",
    resultado: "Aprobado",
    monto: "1500",
    fecha: "2024-01-10",
  },
  {
    codigoRTO: "RTO002",
    fechaRev: "2024-02-15",
    patente: "DEF456",
    resultado: "Rechazado",
    monto: "0",
    fecha: "2024-02-15",
  },
  {
    codigoRTO: "RTO003",
    fechaRev: "2024-03-20",
    patente: "GHI789",
    resultado: "Aprobado",
    monto: "2000",
    fecha: "2024-03-20",
  },
];

const vehiculos = [
  {
    patente: "ABC123",
    marca: "Toyota",
    modelo: "Corolla",
    tipo: "Sedán",
    año: "2020",
  },
  {
    patente: "DEF456",
    marca: "Honda",
    modelo: "Civic",
    tipo: "Sedán",
    año: "2019",
  },
  {
    patente: "GHI789",
    marca: "Ford",
    modelo: "Mustang",
    tipo: "Coupé",
    año: "2021",
  },
];

function DetalleFacturacion() {
  const router = useRouter();
  const { codigoRTO } = useParams();

  // Buscar la factura correspondiente
  const factura = facturas.find((f) => f.codigoRTO === codigoRTO);
  const vehiculo = vehiculos.find((v) => v.patente === factura?.patente);

  if (!factura || !vehiculo) {
    return (
      <div className="container mx-auto py-10 flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardContent>
            <p>No se encontraron datos para el código RTO seleccionado.</p>
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
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">RTO Nº {factura.codigoRTO}</CardTitle>
          <CardDescription>Detalles de la facturación y el vehículo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Datos del vehículo</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div>
                  <dt className="font-medium">Tipo:</dt>
                  <dd>{vehiculo.tipo}</dd>
                </div>
                <div>
                  <dt className="font-medium">Modelo:</dt>
                  <dd>{vehiculo.modelo}</dd>
                </div>
                <div>
                  <dt className="font-medium">Marca:</dt>
                  <dd>{vehiculo.marca}</dd>
                </div>
                <div>
                  <dt className="font-medium">Año:</dt>
                  <dd>{vehiculo.año}</dd>
                </div>
                <div>
                  <dt className="font-medium">Patente:</dt>
                  <dd>{vehiculo.patente}</dd>
                </div>
              </dl>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Datos del RTO</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div>
                  <dt className="font-medium">Resultado:</dt>
                  <dd>{factura.resultado}</dd>
                </div>
                <div>
                  <dt className="font-medium">Monto:</dt>
                  <dd>${factura.monto}</dd>
                </div>
                <div>
                  <dt className="font-medium">Fecha:</dt>
                  <dd>{factura.fecha}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex justify-between mt-6">
          <Button variant="ghost" onClick={() => router.back()}>
              Volver
            </Button>
            <div className="space-x-2">
              <Button variant="outline" onClick={() => alert("Editar RTO")}>
                Editar
              </Button>
              <Button onClick={() => alert("Pagar RTO")}>Pagar</Button>
            </div>
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DetalleFacturacion;

