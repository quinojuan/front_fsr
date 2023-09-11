import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const Tablet = () => {
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nombre',
      headerName: 'Nombre',
    },
    {
      field: 'apellido',
      headerName: 'Apellido',
    },
    {
      field: 'fecha_nacimiento',
      headerName: 'Fecha de nacimiento',
    },
    {
      field: 'fecha_bautismo',
      headerName: 'Fecha de bautismo',
    },
    {
      field: 'esperanza',
      headerName: 'Esperanza',
    },
    {
      field: 'anciano',
      headerName: 'Anciano',
    },
    {
      field: 'siervo_ministerial',
      headerName: 'Siervo Ministerial',
    },
    {
      field: 'precursor_regular',
      headerName: 'Precursor Regular',
    },
    {
      field: 'precursor_especial',
      headerName: 'Precursor Especial',
    },
    {
      field: 'grupo',
      headerName: 'Grupo',
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/publicadores").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Box >
      <DataGrid
        rows={data}
        columns={columns}
      />
    </Box>
  );
};

export default Tablet;
