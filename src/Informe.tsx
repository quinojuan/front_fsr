import usePublishers from "./hooks/usePublishers";
import { Publisher } from "./types/Types";

export const Informe = () => {
  const { publicadores, informes, loading, error } = usePublishers();
  console.log(publicadores)

  const mesesOrdenados = [
    "septiembre", "octubre", "noviembre", "diciembre",
    "enero", "febrero", "marzo", "abril", "mayo",
    "junio", "julio", "agosto"
];

const compararMeses = (a, b) => {
  return mesesOrdenados.indexOf(a.mes) - mesesOrdenados.indexOf(b.mes);
};

informes.sort(compararMeses)

  const headers = [
    "Año de servicio",
    "Participacion en el ministerio",
    "Cursos bíblicos",
    "Precursor auxiliar",
    "Horas",
    "Notas",
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h4 className="text-center mb-3">
        REGISTRO DE PUBLICADOR DE LA CONGREGACIÓN
      </h4>
      {publicadores?.map(
        ({
          id,
          nombre,
          apellido,
          fecha_bautismo,
          fecha_nacimiento,
          hombre,
          misionero,
          anciano,
          mujer,
          otras_ovejas,
          precursor_especial,
          precursor_regular,
          siervo_ministerial,
          ungido,
        }) => (
          <div key={id}>
            <section>
              <div className="d-flex align-content-center">
                <label htmlFor="" className="mb-0 p-1">
                  Nombre:
                </label>{" "}
                <input
                  key={id}
                  name="nombreCompleto"
                  className="bg-secondary pl-2 flex-grow-1 text-white"
                  type="text"
                  value={`${apellido} ${nombre}`}
                  />
              </div>
              <div className="d-flex mt-1">
                <div className="flex-grow-1 mr-3">
                  <div className="d-flex align-content-center mb-1">
                    <label htmlFor="" className="mb-0 p-1">
                      Fecha de nacimiento:
                    </label>{" "}
                    <input
                      className="bg-secondary pl-2 flex-grow-1 text-white"
                      name="fecha_nacimiento"
                      type="text"
                      value={fecha_nacimiento ? formatDate(fecha_nacimiento) : ""}
                      />
                  </div>

                  <div className="d-flex align-content-center">
                    <label htmlFor="" className="mb-0 p-1">
                      Fecha de bautismo:
                    </label>
                    <input
                      className="bg-secondary pl-2 flex-grow-1 text-white"
                      name="fecha_bautismo"
                      type="text"
                      value={fecha_bautismo ? formatDate(fecha_bautismo) : ""}
                      />
                  </div>
                </div>

                <div className="d-flex mt-2">
                  <div className="mr-2">
                    <div>
                      {/* <span>{hombre ? (<span>true</span>) : (<span style={{display: "inline-block", width: "12px", height: "12px", border: "1px solid #999", borderRadius: "3px", fontSize: "1px", color: "black", backgroundColor: "black"}}>false</span>)}</span> */}
                      <input
                        className="mr-1"
                        name="hombre"
                        type="checkbox"
                        checked={hombre}
                        />
                      <label htmlFor="">Hombre</label>
                    </div>
                    <div>
                      <input
                        className="mr-1"
                        name="mujer"
                        type="checkbox"
                        readOnly checked={mujer}
                        />
                      <label htmlFor="">Mujer</label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        className="mr-1"
                        name="otras_ovejas"
                        type="checkbox"
                        readOnly checked={otras_ovejas}
                        />
                      <label htmlFor="">Otras ovejas</label>
                    </div>
                    <div>
                      <input
                        className="mr-1"
                        name="ungido"
                        type="checkbox"
                        readOnly checked={ungido}
                        />
                      <label htmlFor="">Ungido</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-around mt-2">
                <div>
                  <input
                    className="mr-1"
                    name="anciano"
                    type="checkbox"
                    readOnly checked={anciano}
                  />
                  <label htmlFor="">Anciano</label>
                </div>
                <div>
                  <input
                    className="mr-1"
                    type="checkbox"
                    readOnly checked={siervo_ministerial}
                  />
                  <label htmlFor="">Siervo ministerial</label>
                </div>
                <div>
                  <input
                    className="mr-1"
                    type="checkbox"
                    readOnly checked={precursor_regular}
                  />
                  <label htmlFor="">Precursor regular</label>
                </div>
                <div>
                  <input
                    className="mr-1"
                    type="checkbox"
                    checked={precursor_especial}
                  />
                  <label htmlFor="">Precursor especial</label>
                </div>
                <div>
                  <input
                    className="mr-1"
                    type="checkbox"
                    readOnly checked={misionero}
                  />
                  <label htmlFor="">Misionero que sirve en el campo</label>
                </div>
              </div>
            </section>
            <table className="table table-bordered table-dark table-sm">
              <thead>
                <tr>
                  {headers.map((item) => {
                    if (item === "Horas")
                      return (
                        <th
                          scope="col"
                          className="text-center align-middle"
                          key={item}
                        >
                          {item}{" "}
                          <span className="font-weight-normal">
                            (Si es precursor o misionero que sirve en el campo)
                          </span>
                        </th>
                      );
                    return (
                      <th
                        scope="col"
                        className="text-center align-middle"
                        key={item}
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {informes
                  .filter((informe) => informe.publicador_id === id)
                  .map(
                    ({
                      mes,
                      participacion_en_el_ministerio,
                      cursos_biblicos,
                      horas,
                      notas,
                      precursor_auxiliar,
                    }) => (
                      <tr key={id}>
                        <td className="text-center align-middle">{mes}</td>
                        <td className="text-center align-middle">
                          {participacion_en_el_ministerio ? (<span>&#x2611;</span>) : (<span>&#x2610;</span>) }
                        </td>
                        <td className="text-center align-middle">
                          {cursos_biblicos}
                        </td>
                        <td className="text-center align-middle">
                          {precursor_auxiliar ? (<span>&#x2611;</span>) : (<span>&#x2610;</span>) }
                        </td>
                        <td className="text-center align-middle">{horas}</td>
                        <td className="text-center align-middle text-nowrap">
                          {notas}
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
};
