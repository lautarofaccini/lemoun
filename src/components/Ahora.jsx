import axios from "axios";

async function fetchAhora() {
  const { data } = await axios.get("http://localhost:3000/api/hello");
  return data;
}

async function Ahora() {
  const ahora = await fetchAhora();

  return <div>Ahora: {ahora.message}</div>;
}

export default Ahora;
