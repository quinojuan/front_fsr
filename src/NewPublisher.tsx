import axios from "axios";
import { useState } from "react";

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/publicadores",
        formData
      );
      console.log(response.data);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>New Publisher</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genero:</label>
          <input
            type="text"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de nacimiento:</label>
          <input
            type="text"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de bautismo:</label>
          <input
            type="text"
            name="fecha_bautismo"
            value={formData.fecha_bautismo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Esperanza:</label>
          <input
            type="text"
            name="esperanza"
            value={formData.esperanza}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Anciano:</label>
          <input
            type="text"
            name="anciano"
            value={formData.anciano}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Siervo Ministerial:</label>
          <input
            type="text"
            name="siervo_ministerial"
            value={formData.siervo_ministerial}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Precursor Regular:</label>
          <input
            type="text"
            name="precursor_regular"
            value={formData.precursor_regular}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Precursor Especial:</label>
          <input
            type="text"
            name="precursor_especial"
            value={formData.precursor_especial}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Grupo:</label>
          <input
            type="text"
            name="grupo"
            value={formData.grupo}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default NewPublisher;
