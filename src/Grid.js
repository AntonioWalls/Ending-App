import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Button } from 'react-bootstrap';

const Grid = () => {
  const [formData, setFormData] = useState({
    idUsuario: "",
    idRol: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    fechaNacimiento: "",
    genero: "",
    correo: "",
    telefono: "",
    nombreUsuario: "",
    contraseña: "",
    habilitado: "",
    nombreCompleto: "",
    strFechaNacimiento: "",
    });

    const [editID, setEditID] = useState()

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0)

    const { idUsuario,
            idRol,
            nombre,
            primerApellido,
            segundoApellido, 
            fechaNacimiento, 
            genero, 
            correo, 
            telefono,
            nombreUsuario,
            contraseña,
            habilitado,
            nombreCompleto,
            strFechaNacimiento } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idUsuario &&
            idRol &&
            nombre && 
            primerApellido &&
            segundoApellido &&
            fechaNacimiento &&
            genero &&
            correo&& 
            telefono &&
            nombreUsuario &&
            contraseña &&
            habilitado &&
            nombreCompleto &&
            strFechaNacimiento) {
            axios.post('http://187.189.158.186:7777/Usuario', formData)
                .then(res => {
                    setData([...data, res.data]);
                    setFormData({ idUsuario: "", 
                                  idRol: "",
                                  nombre: "", 
                                  primerApellido: "",
                                  segundoApellido: "",
                                  fechaNacimiento: "",
                                  genero: "",
                                  correo: "",
                                  telefono: "",
                                  nombreUsuario: "",
                                  contraseña: "",
                                  habilitado: "",
                                  nombreCompleto: "",
                                  strFechaNacimiento: "", });

                })
                .catch(err => console.log(err))

        }
    };

    const handleUpdate = () => {
      if (idUsuario &&
        idRol &&
        nombre && 
        primerApellido &&
        segundoApellido &&
        fechaNacimiento &&
        genero &&
        correo&& 
        telefono &&
        nombreUsuario &&
        contraseña &&
        habilitado &&
        nombreCompleto &&
        strFechaNacimiento) {
          axios.put(`http://187.189.158.186:7777/Usuario${editID}`, formData)
              .then(res => {
                  setFormData({ idUsuario: "", 
                  idRol: "",
                  nombre: "", 
                  primerApellido: "",
                  segundoApellido: "",
                  fechaNacimiento: "",
                  genero: "",
                  correo: "",
                  telefono: "",
                  nombreUsuario: "",
                  contraseña: "",
                  habilitado: "",
                  nombreCompleto: "",
                  strFechaNacimiento: "",});
                  setRefresh(refresh + 1)
              })
              .catch(err => console.log(err))

      }
  };

  const handleDelete = (deleteID) => {
      axios.delete(`http://187.189.158.186:7777/Usuario${deleteID}`)
      .then(res => {
        console.log('DELETD RECORD::::', res)

      })
      .catch(err => console.log(err))
  };

  const handleEdit = (editIDNotState) => {
      axios.get(`http://187.189.158.186:7777/Usuario${editIDNotState}`)
          .then(res => {
              setFormData(res.data)

          })
          .catch(err => console.log(err))
  };

  useEffect(() => {
      axios.get('http://187.189.158.186:7777/Usuario')
          .then(res => {
              setData(res.data)
          })
          .catch(err => console.log(err))
      // console.log(data);
  }, [refresh]);


  //---------------------------------------------------
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


  return (
        <div className="ag-theme-quartz" style={{ height: 600, width:1500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection={"multiple"}
        rowMultiSelectWithClick={true}
        singleClickEdit
        stopEditingWhenCellsLoseFocus

      />
      

    </div>


  );
};

export default Grid;
