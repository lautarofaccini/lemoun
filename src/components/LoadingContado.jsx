import { Loader2 } from "lucide-react";

export function LoadingContado() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
      <span className="ml-2">Esperando cierre de caja...</span>
    </div>
  );
}
