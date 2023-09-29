import React, { useState } from "react";

const TestComponent = () => {
  const [varonNombrado, setVaronNombrado] = useState({
    anciano: "no",
    siervo_ministerial: "no",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "anciano" && value === "si") {
      setVaronNombrado({
        anciano: "si",
        siervo_ministerial: "no",
      });
    } else if (name === "siervo_ministerial" && value === "si") {
      setVaronNombrado({
        anciano: "no",
        siervo_ministerial: "si",
      });
    } else {
      setVaronNombrado({
        anciano: "no",
        siervo_ministerial: "no",
      });
    }
  };
  return (
    <div>
      <form>
        <label>
          Anciano:&nbsp;
          <input
            type="radio"
            name="anciano"
            value="si"
            checked={varonNombrado.anciano === "si"}
            onChange={handleInputChange}
          /></label>
        &nbsp;
        <label>
          Siervo Ministerial:&nbsp;
          <input
            type="radio"
            name="siervo_ministerial"
            value="si"
            checked={varonNombrado.siervo_ministerial === "si"}
            onChange={handleInputChange}
          /></label>
        <br />
        <label>
          Sin privilegios:
          <input
            type="radio"
            name="ninguno"
            value="no"
            checked={
              varonNombrado.anciano === "no" &&
              varonNombrado.siervo_ministerial === "no"
            }
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default TestComponent;
