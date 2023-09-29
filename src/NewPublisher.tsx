import { Button } from "@chakra-ui/react";
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
    anciano: "NO",
    siervo_ministerial: "NO",
    precursor_regular: "NO",
    precursor_especial: "NO",
    grupo: "",
  });

  const genero = ["HOMBRE", "MUJER"];
  const esperanza = ["OTRAS_OVEJAS", "UNGIDO"];
  const grupo = ["G1", "G2", "G3", "G4"];
  const opciones = ["NO", "SI"]

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
      anciano: "NO",
      siervo_ministerial: "NO",
      precursor_regular: "NO",
      precursor_especial: "NO",
      grupo: "",
    });
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Nuevo Publicador:</h3>
      <form className="flex flex-column sm:w-3 w-full" onSubmit={handleSubmit}>
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2">Nombre:</label>
          <input
            className="w-8 p-1"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2">Apellido:</label>
          <input
            className="w-8 p-1"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
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
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2">
            Fecha de nacimiento:
          </label>
          <input
            className="w-8 p-1"
            type="text"
            name="fecha_nacimiento"
            placeholder="DD-MM-YYYY"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2">
            Fecha de bautismo:
          </label>
          <input
            className="w-8 p-1"
            type="text"
            name="fecha_bautismo"
            placeholder="DD-MM-YYYY o PNB"
            value={formData.fecha_bautismo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2" htmlFor="">
            Esperanza
          </label>
          <select
            className="w-8 p-1"
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
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2">Anciano:</label>
          <select
            className="w-8 p-1"
            name="anciano"
            value={formData.anciano}
            onChange={handleChange}
          >
            {/* <option value="">Selecciona...</option> */}
            {opciones.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-1">
        <label className="inline-block w-4 text-right pr-2">Sievo Ministerial:</label>
          <select
            className="w-8 p-1"
            name="siervo_ministerial"
            value={formData.siervo_ministerial}
            onChange={handleChange}
          >
            {/* <option value="">Selecciona...</option> */}
            {opciones.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2">
            Precursor Regular:
          </label>
          <select
            className="w-8 p-1"
            name="precursor_regular"
            value={formData.precursor_regular}
            onChange={handleChange}
          >
            {/* <option value="">Selecciona...</option> */}
            {opciones.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2">
            Precursor Especial:
          </label>
          <select
            className="w-8 p-1"
            name="precursor_especial"
            value={formData.precursor_especial}
            onChange={handleChange}
          >
            {/* <option value="">Selecciona...</option> */}
            {opciones.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-1">
          <label className="inline-block w-4 text-right pr-2" htmlFor="">
            Grupo
          </label>
          <select
            className="w-8 p-1"
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
        <Button
          type="submit"
          className="bg-blue-400 text-blue-50 w-4 m-auto mb-3"
        >
          Enviar
        </Button>
      </form>
      <br />
      <Link to={"/"}>
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default NewPublisher;
