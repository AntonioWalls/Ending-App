import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";

const Grid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState([]);

  const onGridReady = params => {
    setGridApi(params.api);
  };

  useEffect(() => {
    fetch('./usuarios.json')
      .then(response => response.json())
      .then(data => {
        setRowData(data);
      });
  }, []);

  return (
    <div className="ag-theme-balham" style={{ height: '500px', width: '500px' }}>
      <h1>Hello from ag-grid!</h1>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}
        columnDefs={[
          {headerName: 'Id', field: 'make'},
          {headerName: 'Model', field: 'model'},
          {headerName: 'Price', field: 'price', editable: true}
        ]}
        enableSorting={true}
        enableFilter={true}
        pagination={true}
      />
    </div>
  );
};

export default Grid;
