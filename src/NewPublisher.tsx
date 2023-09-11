import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewPublisher = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    fecha_nacimiento: "",
    fecha_bautismo: "",
    esperanza: "",
    anciano: 0,
    siervo_ministerial: 0,
    precursor_regular: 0,
    precursor_especial: 0,
    grupo: "",
  });

  const genero = ["HOMBRE", "MUJER"];
  const esperanza = ["OTRAS_OVEJAS", "UNGIDO"];
  const grupo = ["G1", "G2", "G3", "G4"];

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
      await axios.post("http://localhost:3000/publicador", formData);
      alert("Envio exitoso!");
    } catch (error: any) {
      alert(error.message);
    }
    setFormData({
      nombre: "",
      apellido: "",
      genero: "",
      fecha_nacimiento: "",
      fecha_bautismo: "",
      esperanza: "",
      anciano: 0,
      siervo_ministerial: 0,
      precursor_regular: 0,
      precursor_especial: 0,
      grupo: "",
    });
  };

  return (
    <div>
      <h1>New Publisher</h1>
      <form className="flex flex-column sm:w-3 w-full" onSubmit={handleSubmit}>
        <div>
          <label className="inline-block w-4 text-right pr-2">Nombre:</label>
          <input
            className="w-8"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2">Apellido:</label>
          <input
            className="w-8"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2" htmlFor="">
            Genero
          </label>
          <select name="genero" value={formData.genero} onChange={handleChange}>
            <option value="">Selecciona...</option>
            {genero.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2">
            Fecha de nacimiento:
          </label>
          <input
            className="w-8"
            type="text"
            name="fecha_nacimiento"
            placeholder="DD-MM-YYYY"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2">
            Fecha de bautismo:
          </label>
          <input
            className="w-8"
            type="text"
            name="fecha_bautismo"
            placeholder="DD-MM-YYYY o PNB"
            value={formData.fecha_bautismo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2" htmlFor="">
            Esperanza
          </label>
          <select
            className="w-8"
            name="esperanza"
            value={formData.esperanza}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            {esperanza.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2">Anciano:</label>
          <input
            className="w-8"
            type="text"
            name="anciano"
            value={formData.anciano}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2">
            Siervo Ministerial:
          </label>
          <input
            className="w-8"
            type="text"
            name="siervo_ministerial"
            value={formData.siervo_ministerial}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2">
            Precursor Regular:
          </label>
          <input
            className="w-8"
            type="text"
            name="precursor_regular"
            value={formData.precursor_regular}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2">
            Precursor Especial:
          </label>
          <input
            className="w-8"
            type="text"
            name="precursor_especial"
            value={formData.precursor_especial}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="inline-block w-4 text-right pr-2" htmlFor="">
            Grupo
          </label>
          <select
            className="w-8"
            name="grupo"
            value={formData.grupo}
            onChange={handleChange}
          >
            <option value="">Selecciona...</option>
            {grupo.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button className="flex " type="submit">
          Enviar
        </button>
      </form>
      <br />
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default NewPublisher;
