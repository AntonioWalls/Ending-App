import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import * as React from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Button, Col, Row, FormLabel } from "react-bootstrap";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import {SelectedRows, SelectedNodes, grid} from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { getUsers, deleteUser } from '../../redux/actions/actionUsers';

const Grid = ({showForm, idUserEdit}) => {

  const [userSelected, setUserSelected] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState({});

  const [rowData, setRowData] = useState([]);
  
  // definición de variables para despachar datos hacia la tabla
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.getUsers);


  // Obtener la id del usuario. 
  const [id, setId ] = useState(0);
  const gridRef = useRef();
  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    document.querySelector("#selectedRows").innerHTML =
      selectedRows.length === 1 ? selectedRows[0].nombre : "";
    console.log(selectedRows[0].idUsuario);
    setId(selectedRows[0].idUsuario);
    console.log(id)
    
  }, []);


//Despacha los usuarios hacia la tabla de grid
  useEffect(() => {
    dispatch(getUsers());
    console.log(users);
  }, [dispatch]);




  //Definición de columnas
  const columnDefs = [
    { headerName: "idUsuario", field: "idUsuario", editable:true},
    { headerName: "nombre", field: "nombre", editable:true },
    { headerName: "primerApellido", field: "primerApellido", editable:true },
    { headerName: "segundoApellido", field: "segundoApellido", editable:true },
    { headerName: "fechaNacimiento", field: "fechaNacimiento", editable:true},
    { headerName:"nombreUsuario", field: "nombreUsuario", editable:true},
    { headerName:"contraseña", field: "contraseña", editable:true},
    { headerName:"¿habilitado?", field: "habilitado", editable:true},
    { headerName:"nombreCompleto", field: "nombreCompleto", editable:true},
    { headerName:"strFechaNacimiento", field:"strFechaNacimiento", editable:true}
  ];


  const handleNew = () => {
    showForm();
     id(0);
  };

  const handleEdit = () => {
      if(id){
          showForm();
      }else{
          alert('Seleccione un usuario para modificar');
      }
  };

const handleDelete = () => {
  console.log(id);
    if (id) {
      // Eliminar usuario seleccionado
      dispatch(deleteUser(id))
      .then(() => {
        window.location.href = window.location.href;
      })
    } else {
      alert("Seleccione un usuario para eliminar");
    }
  };

  //lo que se muestra en el DOM
  return (
    <>
        <div
      className="ag-theme-quartz" // applying the grid theme // the grid will fill the size of the parent container
    >
      <Row >
        <Col>
          <Button variant='primary' onClick={handleNew}>Nuevo Usuario</Button>
          
        </Col>
        <Col>
          <Button variant='warning' onClick={handleEdit}>Modificar Usuario</Button>
        </Col>
        <Col>
          <Button variant='danger' onClick={handleDelete}>Eliminar Usuario</Button>
        </Col>
      </Row>
      </div>
      <div>
        <FormLabel>Usuario seleccionado: </FormLabel>
        <span id="selectedRows"></span>
      </div>

        <div className="ag-theme-quartz" style={{ height: 600, width:1500 }}>
      <AgGridReact
        ref={gridRef}
        rowData={users}
        columnDefs={columnDefs}
        rowSelection={"single"}
        onSelectionChanged={onSelectionChanged}

      />

    </div>

  </>
  );
};

export default Grid;
