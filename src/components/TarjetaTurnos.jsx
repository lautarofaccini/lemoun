function TarjetaTurnos({turno}) {
  return (
    <div>
        <p>
          <strong>Patente:</strong> {turno.patente}
        </p>
        <p>
          <strong>Fecha:</strong> {turno.fecha}
        </p>
        <p>
          <strong>Hora:</strong> {turno.hora}
        </p>
        <p>
          <strong>Precio:</strong> ${turno.precio.toFixed(2)}
        </p>
    </div>
  );
}

export default TarjetaTurnos;
