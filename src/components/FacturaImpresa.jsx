"use client";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

function FacturaImpresa({ onAccept }) {
  return (
    <div className="container mx-auto py-10 flex justify-center">
      <Card className="w-full max-w-md bg-gray-900 text-white">
        <CardContent>
          <h1>¡Impresión realizada correctamente!</h1>
          <p>Verifique la impresora</p>
          <Button variant="outline" onClick={onAccept}>
            Aceptar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default FacturaImpresa;