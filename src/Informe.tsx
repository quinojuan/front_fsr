import usePublishers from "./hooks/usePublishers";

export const Informe = () => {
  const { publicadores, informes, loading, error } = usePublishers();

  const mesesOrdenados = [
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
    "enero",
    "febrero",
    "Marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
  ];

  const compararMeses = (a, b) => {
    return mesesOrdenados.indexOf(a.mes) - mesesOrdenados.indexOf(b.mes);
  };

  informes.sort(compararMeses);

  const headers = [
    "Año de servicio",
    "Participacion en el ministerio",
    "Cursos bíblicos",
    "Precursor auxiliar",
    "Horas",
    "Notas",
  ];

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
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
          is_active
        }) => (
          <div key={id}>
            <h4 className={is_active ? "text-center mb-3" : "text-center mb-3 text-danger"}>
              REGISTRO DE PUBLICADOR DE LA CONGREGACIÓN
            </h4>
            <section>
              <div className="d-flex">
                <label htmlFor="" className="mb-0 p-1 fw-bold">
                  Nombre:
                </label>{" "}
                <p className="bg-light pl-2 p-1 flex-grow-1 mb-0">
                  {`${apellido} ${nombre}`}
                </p><span className="d-print-none">id: {id}</span>
              </div>
              <div className="d-flex mt-1">
                <div className="flex-grow-1 mr-3">
                  <div className="d-flex mb-1">
                    <label htmlFor="" className="mb-0 p-1 fw-bold">
                      Fecha de nacimiento:
                    </label>{" "}
                    <p className="bg-light pl-2 p-1 flex-grow-1 mb-0">
                      {fecha_nacimiento ? formatDate(fecha_nacimiento) : ""}
                    </p>
                  </div>

                  <div className="d-flex">
                    <label htmlFor="" className="mb-0 p-1 fw-bold">
                      Fecha de bautismo:
                    </label>{" "}
                    <p className="bg-light pl-2 p-1 flex-grow-1 mb-0">
                      {fecha_bautismo ? formatDate(fecha_bautismo) : ""}
                    </p>
                  </div>
                </div>

                <div className="d-flex mt-2">
                  <div className="mr-2">
                    <div>
                      {hombre ? <span>&#x2611;</span> : <span>&#x2610;</span>}
                      <label htmlFor="">&nbsp;Hombre</label>
                    </div>
                    <div>
                      {mujer ? <span>&#x2611;</span> : <span>&#x2610;</span>}
                      <label htmlFor="">&nbsp;Mujer</label>
                    </div>
                  </div>
                  <div>
                    <div>
                      {otras_ovejas ? (
                        <span>&#x2611;</span>
                      ) : (
                        <span>&#x2610;</span>
                      )}
                      <label htmlFor="">Otras ovejas</label>
                    </div>
                    <div>
                      {ungido ? <span>&#x2611;</span> : <span>&#x2610;</span>}
                      <label htmlFor="">Ungido</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-around mt-2">
                <div>
                  {anciano ? <span>&#x2611;</span> : <span>&#x2610;</span>}
                  <label htmlFor="" className="">
                    Anciano
                  </label>
                </div>
                <div>
                  {siervo_ministerial ? (
                    <span>&#x2611;</span>
                  ) : (
                    <span>&#x2610;</span>
                  )}
                  <label htmlFor="">Siervo ministerial</label>
                </div>
                <div>
                  {precursor_regular ? (
                    <span>&#x2611;</span>
                  ) : (
                    <span>&#x2610;</span>
                  )}
                  <label htmlFor="">Precursor regular</label>
                </div>
                <div>
                  {precursor_especial ? (
                    <span>&#x2611;</span>
                  ) : (
                    <span>&#x2610;</span>
                  )}
                  <label htmlFor="">Precursor especial</label>
                </div>
                <div>
                  {misionero ? <span>&#x2611;</span> : <span>&#x2610;</span>}
                  <label htmlFor="">Misionero que sirve en el campo</label>
                </div>
              </div>
            </section>
            <table className="table table-bordered border border-black table-sm">
              <thead>
                <tr>
                  {headers.map((item) => {
                    if (item === "Horas")
                      return (
                        <th className="text-center align-middle" key={item}>
                          {item}{" "}
                          <span className="fw-normal">
                            (Si es precursor o misionero que sirve en el campo)
                          </span>
                        </th>
                      );
                    return (
                      <th className="text-center align-middle" key={item}>
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
                    (
                      {
                        mes,
                        participacion_en_el_ministerio,
                        cursos_biblicos,
                        horas,
                        notas,
                        precursor_auxiliar,
                      },
                      idx
                    ) => (
                      <tr key={idx}>
                        <td className="text-center align-middle">{mes}</td>
                        <td className="text-center align-middle">
                          {participacion_en_el_ministerio ? (
                            <span>&#x2611;</span>
                          ) : (
                            <span>&#x2610;</span>
                          )}
                        </td>
                        <td className="text-center align-middle">
                          {cursos_biblicos}
                        </td>
                        <td className="text-center align-middle">
                          {precursor_auxiliar ? (
                            <span>&#x2611;</span>
                          ) : (
                            <span>&#x2610;</span>
                          )}
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
            <div style={{ pageBreakAfter: "always" }}></div>
          </div>
        )
      )}
    </div>
  );
};
