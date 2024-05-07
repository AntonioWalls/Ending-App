import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Button, Form, Col, Row, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser, getUserUnique } from '../../redux/actions/actionUsers';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function App({ showForm, id }) {

  const initialUserState = {
    IDUsuario: 0,
    Nombre: '',
    PrimerApellido: '',
    SegundoApellido: '',
    Genero: null,
    Correo: '',
    FechaNacimiento: '', 
    Telefono: '',
    IDRol: 0,
    NombreUsuario: '',
    Contraseña: '',
    ConfirmarContraseña: '',
    Habilitado: true
};

const dispatch = useDispatch();
const [user, setUser] = useState({initialUserState});

useEffect(() => {
    if (id > 0) {
        dispatch(getUserUnique(id))
            .then((response) => {
                setUser(response.payload);
            });
    }
}, [dispatch, id]);

const handleCancel = () => {
    setUser(initialUserState);
    showForm();
};

const handleGuardar = () => {
    if(user.Contraseña === user.ConfirmarContraseña){
        dispatch(addUser(user)).then(() => {
            console.log('Usuario guardado');
        });
    }
};

  return (
    <Card>
      <Card.Header className='header'>
        <Card.Title>Registro de usuario</Card.Title>
      </Card.Header>

      <Card.Body>
        <Form>

            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name='nombre'
              value={user.Nombre}
              onChange={(e) => setUser({...user, Nombre:e.target.value})}
              placeholder="Ingresa tu nombre" />
            
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu apellido paterno" 
              name="primerApellido"
              value={user.PrimerApellido}
              onChange={(e) => setUser({ ...user, PrimerApellido: e.target.value })}
              />

            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ingresa tu apellido materno" 
              name="segundoApellido"
              value={user.SegundoApellido}
              onChange={(e) => setUser({ ...user, SegundoApellido: e.target.value })}
              />

            <Form.Label>Genero</Form.Label>
            <Form.Select 
              name="genero" 
              value={user.Genero} 
              onChange={(e) => setUser({...user, Genero: e.target.value == 1 ? true : false })}>
              <option value={""} disabled>Seleccione un Genero</option>
              <option value={1}>Masculino</option>
              <option value={2}>Femenino</option>
            </Form.Select>

            <Form.Label>Fecha de Nacimiento</Form.Label>
            

            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ingresa tu nombre de usuario"
              name="nombreUsuario"
              value={user.NombreUsuario}
              onChange={(e) => setUser({ ...user, NombreUsuario: e.target.value })}
            />



            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Ingresa tu contraseña" 
              name="contrasena"
              value={user.Contraseña}
              onChange={(e) => setUser({ ...user, Contraseña: e.target.value })}
            />

            <Form.Label>Confirma tu Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Ingresa tu contraseña nuevamente" 
              name="confirmarContrasena"
              value={user.ConfirmarContraseña}
              onChange={(e) => setUser({ ...user, ConfirmarContraseña: e.target.value })}
              />

        </Form>
      </Card.Body>
      <Card.Footer>
      <Button variant='danger' onClick={handleCancel} className='m-1'>Cancelar</Button>
      <Button variant='primary' onClick={handleGuardar}>Guardar</Button>
      </Card.Footer>
        </Card>
  );

  
}
export default App;