import Link from "next/link";

function HomePage() {
  return (
    <section className="h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-7 py-5">Menú</h1>
      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
        <Link
          className="w-full py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-800 transition-colors"
          href="/facturacion"
        >
          Facturación
        </Link>
        <Link
          className="w-full py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-800 transition-colors"
          href="/obleas"
        >
          Obleas
        </Link>
        <Link
          className="w-full py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-800 transition-colors"
          href="/turnos"
        >
          Turnos
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
