import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { LoadingOblea } from "@/components/LoadingOblea";
import FacturaImpresa from "./FacturaImpresa";

export function ResultadoPago({ metodoPago, onClose, onPagoExitoso }) {
  const [estadoPago, setEstadoPago] = useState(null); // Estado del resultado
  const [open, setOpen] = useState(true); // Controla si el modal está visible
  const [isPrinting, setIsPrinting] = useState(false); // Controla el estado de impresión
  const [showFacturaImpresa, setShowFacturaImpresa] = useState(false);

  useEffect(() => {
    if (metodoPago === "efectivo") {
      setEstadoPago(true); // Si es efectivo, siempre es exitoso
    } else {
      const resultado = Math.random() >= 0.5; // Simula resultado para tarjeta
      setEstadoPago(resultado);
    }
  }, [metodoPago]);

  const handleClose = () => {
    setOpen(false);
    onClose();
    if (estadoPago) {
      onPagoExitoso(); // Continuar flujo si el pago fue exitoso
    }
  };

  const handlePrint = () => {
    setIsPrinting(true); // Muestra el loader
    setTimeout(() => {
      setIsPrinting(false); // Oculta el loader tras 3 segundos
      setShowFacturaImpresa(true); // Muestra FacturaImpresa
    }, 3000);
  };

  const handleAcceptFacturaImpresa = () => {
    setShowFacturaImpresa(false); // Oculta FacturaImpresa
    onClose(); // Cierra el modal
  };

  if (!open) return null;

  return (
    <>
      {/* Modal principal */}
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
          {estadoPago ? (
            <div>
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
              <p className="mt-4 text-lg font-semibold">¡Pago exitoso!</p>
              <p className="mt-4 text-start">Previsualización:</p>
              <img
                src="/factura.jpg"
                alt="Vista previa de factura"
                className="shadow-md mx-auto"
              />
            </div>
          ) : (
            <div>
              <XCircle className="h-12 w-12 text-red-400 mx-auto" />
              <p className="mt-4 text-lg font-semibold">Pago rechazado</p>
            </div>
          )}
          {estadoPago && (
            <Button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white w-full py-2"
              onClick={handlePrint} // Maneja el evento de impresión
            >
              Imprimir Factura
            </Button>
          )}
          <Button
            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white w-full py-2"
            onClick={handleClose}
          >
            Aceptar
          </Button>
        </div>
      </div>

      {/* Loader de impresión */}
      <AlertDialog open={isPrinting}>
        <AlertDialogContent>
          <LoadingOblea />
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showFacturaImpresa}>
        <AlertDialogContent>
          <FacturaImpresa onAccept={handleAcceptFacturaImpresa} />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
