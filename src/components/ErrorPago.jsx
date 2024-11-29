"use client";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

function ErrorPago({ onAccept }) {
  return (
    <div className="container mx-auto py-10 flex justify-center">
      <Card className="w-full max-w-md bg-gray-900 text-white">
        <CardContent>
          <h1>ERROR</h1>
          <p>El pago no ha podido realizarse</p>
          <Button variant="outline" onClick={onAccept}>
            Aceptar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SuccessPago;
