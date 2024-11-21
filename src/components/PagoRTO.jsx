"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";

function PagoRTO({ factura, onConfirm, onClose }) {
    const [metodoPago, setMetodoPago] = useState("");
  
    const handleConfirmar = () => {
      if (!metodoPago) {
        alert("Por favor, selecciona un medio de pago.");
        return;
      }
  
      onConfirm(metodoPago); // Notificar al componente padre
    };
  
    return (
      <div className="container mx-auto py-10 flex justify-center">
        <Card className="w-full max-w-md bg-gray-900 text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Pago de RTO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold">
                  Monto: ${factura.monto.toFixed(2)}
                </h2>
              </div>
              <div>
                <h3 className="font-medium">Medio de Pago:</h3>
                <RadioGroup
                  onValueChange={(value) => setMetodoPago(value)}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Efectivo" id="efectivo" />
                    <label htmlFor="efectivo" className="text-sm">
                      Efectivo
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Débito" id="debito" />
                    <label htmlFor="debito" className="text-sm">
                      Débito
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Crédito" id="credito" />
                    <label htmlFor="credito" className="text-sm">
                      Crédito
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="ghost" onClick={onClose}>
                  Cancelar
                </Button>
                <Button onClick={handleConfirmar} className="bg-blue-500">
                  Confirmar Pago
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default PagoRTO