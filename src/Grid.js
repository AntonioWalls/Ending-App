import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";


const Grid = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios.get('/usuarios.json')
      .then(response => {
        setRowData(response.data.usuarios);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Nombre", field: "Nombre" },
    { headerName: "Primer Apellido", field: "PrimerApellido" },
    { headerName: "Segundo Apellido", field: "SegundoApellido" },
    { headerName: "Correo", field: "Correo" },
    { headerName: "Teléfono", field: "Telefono" },
    { headerName: "Nombre de Usuario", field: "NombredeUsuario" }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default Grid;
