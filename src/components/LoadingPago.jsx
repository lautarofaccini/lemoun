import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function LoadingPago({ onFinalizar }) {
  const [fase, setFase] = useState("esperando"); // "esperando" o "procesando"

  useEffect(() => {
    const timer = setTimeout(() => {
      setFase("procesando");
      const resultadoTimer = setTimeout(onFinalizar, 2000); // Llamar a onFinalizar después de procesar
      return () => clearTimeout(resultadoTimer);
    }, 2000); // Esperar 2s para pasar de "esperando" a "procesando"

    return () => clearTimeout(timer);
  }, [onFinalizar]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center">
        {fase === "esperando" ? (
          <>
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Esperando que aproximes la tarjeta...</span>
          </>
        ) : (
          <>
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Procesando pago...</span>
          </>
        )}
      </div>
    </div>
  );
}
