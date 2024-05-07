import React, { useEffect, useState } from 'react';
import Grid from './Grid';
import { useDispatch } from 'react-redux';
import App from './App';

function Usuarios(){
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [idUserEdit, setUserEdit] = useState(0)

  const showTable = () => {
    setShowForm(prevShowForm => !prevShowForm);
    setUserEdit(idUserEdit);
  };

  useEffect(() => {
        
  }, [dispatch, idUserEdit]);

  return (
    showForm ? (
        <App showForm={showTable} id={idUserEdit}/>
    ) : (
        <Grid showForm={showTable} idUserEdit={id => setUserEdit(id)}/>
    )
  );
}
export default Usuarios;