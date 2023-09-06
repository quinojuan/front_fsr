import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

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
    publicadorId:0
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

  const allPublicadores = async () => {
    const response = await axios("http://localhost:3000/publicadores");
    setPublicadores(response.data)
    console.log(publicadores)
  };

  useEffect(() => {
    allPublicadores()
  }, [])

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
      alert("Envio exitoso!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>New Informe</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="">ID</label>
          <select name="publicadorId" value={formData.publicadorId} onChange={handleChange}>
             <option value={}></option>
          </select>
        </div>
        <div>
          <label htmlFor="">Publicador</label>
          <select name="publicador" value={formData.publicador} onChange={handleChange}>
            <option value="">Selecciona...</option>
            {publicadores.map((opcion, index) => (
              <option value={opcion.nombre} key={index}>
                {`${opcion.nombre} ${opcion.apellido}`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Mes</label>
          <select name="mes" value={formData.mes} onChange={handleChange}>
            <option value="">Selecciona...</option>
            {meses.map((opcion, index) => (
              <option value={opcion} key={index}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Publicaciones:</label>
          <input
            type="text"
            name="publicaciones"
            value={formData.publicaciones}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Videos:</label>
          <input
            type="text"
            name="videos"
            value={formData.videos}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Horas:</label>
          <input
            type="text"
            name="horas"
            value={formData.horas}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Revisitas:</label>
          <input
            type="text"
            name="revisitas"
            value={formData.revisitas}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estudios:</label>
          <input
            type="text"
            name="estudios"
            value={formData.estudios}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Notas:</label>
          <input
            type="text"
            name="notas"
            value={formData.notas}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default NewInforme;
