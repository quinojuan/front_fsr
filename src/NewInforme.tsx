import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "/node_modules/primeflex/primeflex.css";
import "./index.css";

const NewInforme = () => {
  const [publicadores, setPublicadores] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    publicador: "",
    mes: "",
    publicaciones: 0,
    videos: 0,
    horas: 0,
    revisitas: 0,
    estudios: 0,
    notas: "",
  });

  const meses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];

  useEffect(() => {
    const allPublicadores = async () => {
      const response = await axios("http://localhost:3000/publicadores");
      setPublicadores(response.data);
      console.log(response.data);
    };
    allPublicadores();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/informe", formData);
      console.log("Se envió la data...", formData);
      alert("Envio exitoso!");
    } catch (error: any) {
      alert(error.message);
    }
    setFormData({
      publicador: "",
      mes: "",
      publicaciones: 0,
      videos: 0,
      horas: 0,
      revisitas: 0,
      estudios: 0,
      notas: "",
    });
  };

  return (
    <div>
      <h1>New Informe</h1>
      <form className="flex flex-column sm:w-2 w-full" onSubmit={handleSubmit}>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2">Publicador</label>
          <select
            className="w-8"
            name="publicador"
            value={formData.publicador}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            {publicadores.map((opcion, index) => (
              <option value={`${opcion.nombre} ${opcion.apellido}`} key={index}>
                {`${opcion.nombre} ${opcion.apellido}`}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2" htmlFor="">
            Mes
          </label>
          <select
            className="w-8"
            name="mes"
            value={formData.mes}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            {meses.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2">
            Publicaciones:
          </label>
          <input
            className="w-8"
            type="text"
            name="publicaciones"
            value={formData.publicaciones}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2">Videos:</label>
          <input
            className="w-8"
            type="text"
            name="videos"
            value={formData.videos}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2">Horas:</label>
          <input
            className="w-8"
            type="text"
            name="horas"
            value={formData.horas}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2">Revisitas:</label>
          <input
            className="w-8"
            type="text"
            name="revisitas"
            value={formData.revisitas}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2">Estudios:</label>
          <input
            className="w-8"
            type="text"
            name="estudios"
            value={formData.estudios}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="inline-block w-4 text-right pr-2">Notas:</label>
          <input
            className="w-8"
            type="text"
            name="notas"
            value={formData.notas}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Enviar</button>
      </form>
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default NewInforme;
