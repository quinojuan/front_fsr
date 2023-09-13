import axios from "axios";
import React, { useEffect, useState } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/table";
import { Input, Button } from "@chakra-ui/react";

const Tablet = () => {
  const [info, setInfo] = useState(data);
  const [query, setQuery] = useState("");

  const handleInput = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    console.log(value);
    setQuery(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios(
        `http://localhost:3000/consulta?id=${query}`
      );
      setInfo(response.data);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    console.log(info);
  });
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Input
        placeholder="Ingrese un Nº de ID"
        w={"20%"}
        mr={10}
        onChange={handleInput}
      />
      <Button colorScheme="blue" onClick={handleSubmit}>
        Enviar consulta
      </Button>
      <br />
      <br />
      <Table
        width={"80%"}
        m={"auto"}
        variant="simple"
        colorScheme="blue"
        size={"sm"}
      >
        <Thead>
          <Tr>
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
