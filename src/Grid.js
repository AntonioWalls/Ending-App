import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";



const Grid = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const columnDefs = [
    { headerName: "UserId", field: "userId" },
    { headerName: "Id", field: "id" },
    { headerName: "Title", field: "title" },
    { headerName: "Body", field: "body" },

  ];

  return (
        <div className="ag-theme-alpine" style={{ height: 600, width:900 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>

  );
};

export default Grid;
