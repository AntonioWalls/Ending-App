import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";



const Grid = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios.get('http://187.189.158.186:7777/Usuario')
      .then(response => {
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const columnDefs = [
    { headerName: "idUsuario", field: "idUsuario" },
    { headerName: "nombre", field: "nombre" },
    { headerName: "primerApellido", field: "primerApellido" },
    { headerName: "segundoApellido", field: "segundoApellido" },
    { headerName: "fechaNacimiento", field: "fechaNacimiento"},
    { headerName:"nombreUsuario", field: "nombreUsuario"},
    { headerName:"contraseña", field: "contraseña"},
    { headerName:"¿habilitado?", field: "habilitado"},
    { headerName:"nombreCompleto", field: "nombreCompleto"},
    { headerName:"strFechaNacimiento", field:"strFechaNacimiento"}

  ];

  return (
        <div className="ag-theme-quartz" style={{ height: 600, width:1500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection={"multiple"}
          rowMultiSelectWithClick={true}
      />
    </div>

  );
};

export default Grid;
