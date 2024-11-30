"use client";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

function FacturaImpresa({ onAccept }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <Card className="w-full max-w-sm bg-gray-900 text-white rounded-lg shadow-xl">
        <CardContent className="text-center p-6">
          <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
          <h1 className="mt-4 text-2xl font-semibold">
            ¡Impresión realizada correctamente!
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Verifique que la impresión.
          </p>
          <Button
            variant="outline"
            className="mt-6 w-full py-2 border-gray-700 hover:bg-gray-800 text-white"
            onClick={onAccept}
          >
            Aceptar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default FacturaImpresa;
