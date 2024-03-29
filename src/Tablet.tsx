import axios from "axios";
import { useEffect, useState } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/table";
import { Input, Button } from "@chakra-ui/react";

const Tablet = () => {
  const [info, setInfo] = useState(data);
  const [query, setQuery] = useState({
    id: "",
    nombre: "",
  });

  const handleInput = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    setQuery({
      ...query,
      [name]: value,
    });
    console.log({query})
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios(
        `http://localhost:3000/consulta?id=${query.id}&nombre=${query.nombre}`
      );
      setInfo(response.data);
    } catch (error:any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    console.log(info);
  });
  return (
    <>
      <Link to={"/"}>
        <Button className="mb-3">Home</Button>
      </Link>
      <br />
      <div className="m-auto w-8 flex justify-content-center">
        <Input
          placeholder="Ingrese un Nº de ID"
          name="id" // me faltaba este identificador
          w={"20%"}
          mr={10}
          onChange={handleInput}
        />
        <Input
          placeholder="Ingrese un nombre"
          name="nombre" // me faltaba este identificador
          w={"20%"}
          mr={10}
          onChange={handleInput}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Enviar consulta
        </Button>
      </div>
      <br />
      <Table
        width={"80%"}
        m={"auto"}
        variant="simple"
        colorScheme="blue"
        size={"sm"}
      >
        <Thead>
          <Tr border={"solid"}>
            <Th>ID</Th>
            <Th>Nombre</Th>
            <Th>Apellido</Th>
            <Th>Fecha de nacimiento</Th>
            <Th>Fecha de bautismo</Th>
            <Th>Anciano</Th>
            <Th>Siervo Ministerial</Th>
            <Th>Precursor Regular</Th>
            <Th>Precursor Especial</Th>
            <Th>Grupo</Th>
          </Tr>
        </Thead>
        <Tbody>
          {info.map((item, idx) => (
            <Tr key={idx}>
              <Td>{item.id}</Td>
              <Td>{item.nombre}</Td>
              <Td>{item.apellido}</Td>
              <Td>{item.fecha_nacimiento}</Td>
              <Td>{item.fecha_bautismo}</Td>
              <Td>
                {item.anciano === 1 ? (
                  <input type="checkbox" defaultChecked></input>
                ) : (
                  <input type="checkbox" disabled></input>
                )}
              </Td>
              <Td>
                {item.siervo_ministerial === 1 ? (
                  <input type="checkbox" defaultChecked></input>
                ) : (
                  <input type="checkbox" disabled></input>
                )}
              </Td>
              <Td>
                {item.precursor_regular === 1 ? (
                  <input type="checkbox" defaultChecked></input>
                ) : (
                  <input type="checkbox" disabled></input>
                )}
              </Td>
              <Td>
                {item.precursor_especial === 1 ? (
                  <input type="checkbox" defaultChecked></input>
                ) : (
                  <input type="checkbox" disabled></input>
                )}
              </Td>
              <Td>{item.grupo}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Tablet;
