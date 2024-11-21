"use client";

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
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";

// Datos simulados
const resultados = [
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
];

const vehiculos = [
  {
    patente: "ABB123",
    marca: "Toyota",
    modelo: "Corolla",
    tipo: "Sedán",
    año: "2020",
  },
  {
    patente: "ZEC456",
    marca: "Honda",
    modelo: "Civic",
    tipo: "Sedán",
    año: "2019",
  },
  {
    patente: "JAK221",
    marca: "Ford",
    modelo: "Mustang",
    tipo: "Coupé",
    año: "2021",
  },
];

function ResultadoRTO() {
  const router = useRouter();
  const { codigoRTO } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Buscar datos correspondientes
  const resultado = resultados.find((f) => f.codigoRTO === codigoRTO);
  const vehiculo = vehiculos.find((v) => v.patente === resultado?.patente);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        router.push("/");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, router]);

  const handlePrint = () => {
    setShowPreview(false);
    setIsLoading(true);
  };

  if (!resultado || !vehiculo) {
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
          <CardTitle className="text-2xl font-bold">
            Resultado de la RTO Nº {resultado.codigoRTO}
          </CardTitle>
          <CardDescription>
            Detalles de la inspección y el vehículo
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
                  <dd>{resultado.resultado}</dd>
                </div>
                <div>
                  <dt className="font-medium">Monto:</dt>
                  <dd>${resultado.monto.toFixed(2)}</dd>
                </div>
                <div>
                  <dt className="font-medium">Fecha de revisión:</dt>
                  <dd>{resultado.fechaRev}</dd>
                </div>
                <div>
                  <dt className="font-medium">Estado de pago:</dt>
                  <dd>{resultado.estadoPago}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="ghost" onClick={() => router.back()}>
              Volver
            </Button>
            <div className="space-x-2">
              <Button
                variant="outline"
                onClick={() => alert("Editar datos de la RTO")}
              >
                Editar
              </Button>
              <AlertDialog open={showPreview || isLoading}>
                <AlertDialogTrigger asChild>
                  <Button
                    onClick={() => {
                      resultado.estadoPago === "Sin pagar"
                        ? setShowAlert(true)
                        : setShowPreview(true);
                    }}
                  >
                    Imprimir Oblea
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Vista previa de la Oblea
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <img src="/oblea.png" alt="vista previa" />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel
                          onClick={() => setShowPreview(false)}
                        >
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handlePrint}>
                          Imprimir
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </>
                  )}
                </AlertDialogContent>
              </AlertDialog>
              {showAlert && (
                <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Pago pendiente</AlertDialogTitle>
                      <AlertDialogDescription>
                        No se puede imprimir hasta que se realice el pago.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction onClick={() => setShowAlert(false)}>
                        Entendido
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResultadoRTO;
