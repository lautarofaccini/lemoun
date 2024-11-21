"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Facturacion() {
  const router = useRouter();

  // Datos inventados
  const facturas = [
    { codigoRTO: "RTO001", fechaRev: "2024-01-10", patente: "ABC123" },
    { codigoRTO: "RTO002", fechaRev: "2024-02-15", patente: "DEF456" },
    { codigoRTO: "RTO003", fechaRev: "2024-03-20", patente: "GHI789" },
  ];

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Facturación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Encabezados */}
            <div className="grid grid-cols-4 gap-4 font-bold text-sm text-gray-500 mb-2">
              <div>Código RTO</div>
              <div>Fecha de Revisión.</div>
              <div>Patente</div>
            </div>
            {/* Filas de datos */}
            {facturas.map((factura, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-200 last:border-b-0"
              >
                <div>{factura.codigoRTO}</div>
                <div>{factura.fechaRev}</div>
                <div>{factura.patente}</div>
                <div className="text-right">
                  <Button
                    onClick={() =>
                        router.push(`/facturacion/${factura.codigoRTO}`)
                    }
                  >
                    Ver
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={() => router.back()}>
              Volver
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Facturacion;
