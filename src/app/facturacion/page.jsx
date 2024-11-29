"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

function Facturacion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState("codigo");

  const router = useRouter();

  // Datos inventados
  const facturas = [
    { codigoRTO: "RTO001", fechaRev: "2023-01-10", patente: "ZBC123" },
    { codigoRTO: "RTO002", fechaRev: "2024-02-15", patente: "DEF456" },
    { codigoRTO: "RTO003", fechaRev: "2022-03-20", patente: "GHI789" },
  ];

  // Filtrar facturas según el término de búsqueda
  const filteredFacturas = facturas.filter((facturas) =>
    facturas.patente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenar facturas según el criterio seleccionado
  const sortedFacturas = filteredFacturas.sort((a, b) => {
    if (sortCriteria === "fecha")
      return new Date(a.fechaRev) - new Date(b.fechaRev);
    if (sortCriteria === "patente") return a.patente.localeCompare(b.patente);
    if (sortCriteria === "codigo")
      return a.codigoRTO.localeCompare(b.codigoRTO);
    return 0;
  });

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <CardTitle className="text-2xl font-bold">Facturación</CardTitle>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <input
                type="text"
                placeholder="Buscar por patente..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg mb-4 sm:mb-0 sm:mr-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="px-3 py-2 border border-gray-300 rounded-lg"
                value={sortCriteria}
                onChange={(e) => setSortCriteria(e.target.value)}
              >
                <option value="codigo">Ordenar por Código</option>
                <option value="fecha">Ordenar por Fecha</option>
                <option value="patente">Ordenar por Patente</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Encabezados */}
            <div className="grid grid-cols-4 gap-4 font-bold text-sm text-gray-500 mb-2">
              <div>Código RTO</div>
              <div>Fecha de Revisión</div>
              <div>Patente</div>
            </div>
            {/* Filas de datos */}
            {sortedFacturas.map((factura, index) => (
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
            {sortedFacturas.length === 0 && (
              <p className="text-center text-gray-500">
                No se encontraron resultados.
              </p>
            )}
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
