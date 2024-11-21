function LoginPage() {
  return (
    <section className="h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-6">
        <h1 className="text-3xl mb-7 py-5 text-center">Iniciar Sesión</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Acceder
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          ¿Aún no tiene una cuenta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Registrarse
          </a>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
