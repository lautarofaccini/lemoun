"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PagoRTO from "@/components/PagoRTO";
import { LoadingPago } from "@/components/LoadingPago";
import { ResultadoPago } from "@/components/ResultadoPago";

const facturas = [
  {
    codigoRTO: "RTO001",
    fechaRev: "2024-01-10",
    patente: "ABC123",
    resultado: "Aprobado",
    monto: 1500,
  },
  {
    codigoRTO: "RTO002",
    fechaRev: "2024-02-15",
    patente: "DEF456",
    resultado: "Aprobado",
    monto: 1200,
  },
  {
    codigoRTO: "RTO003",
    fechaRev: "2024-03-20",
    patente: "GHI789",
    resultado: "Aprobado",
    monto: 2000,
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
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showResultadoPago, setShowResultadoPago] = useState(false);
  const [metodoPago, setMetodoPago] = useState(null);

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

  const handlePagoConfirmado = (metodo) => {
    setMetodoPago(metodo);
    if (metodo === "efectivo") {
      setDialogOpen(false);
      setShowResultadoPago(true); // Mostrar resultado directamente
    } else {
      setIsLoading(true); // Iniciar carga para tarjeta
      setDialogOpen(true);

      setTimeout(() => {
        setIsLoading(false);
        setDialogOpen(false);
        setShowResultadoPago(true);
      }, 4000); // Simula el tiempo del proceso
    }
  };

  const handleResultadoCerrado = () => {
    setShowResultadoPago(false);
  };

  const handlePagoExitoso = () => {
    router.push("/facturacion");
  };

  return (
    <div className="container mx-auto py-10 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Facturación de la RTO Nº {factura.codigoRTO}
          </CardTitle>
          <CardDescription>
            Detalles de la facturación y el vehículo
          </CardDescription>
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
              <h2 className="text-lg font-semibold">Datos de la RTO</h2>
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
                  <dt className="font-medium">Fecha de revisión:</dt>
                  <dd>{factura.fechaRev}</dd>
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
              <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogTrigger asChild>
                  <Button>Pagar</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  {isLoading ? (
                    metodoPago === "Efectivo" ? (
                      <LoadingContado />
                    ) : (
                      <LoadingPago />
                    )
                  ) : (
                    <AlertDialogHeader>
                      <PagoRTO
                        factura={factura}
                        onConfirm={handlePagoConfirmado}
                        onClose={() => setDialogOpen(false)}
                      />
                    </AlertDialogHeader>
                  )}
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal de resultado */}
      {showResultadoPago && (
        <ResultadoPago
          metodoPago={metodoPago} // Pasamos el método de pago
          onClose={handleResultadoCerrado}
          onPagoExitoso={handlePagoExitoso}
        />
      )}
    </div>
  );
}

export default DetalleFacturacion;
