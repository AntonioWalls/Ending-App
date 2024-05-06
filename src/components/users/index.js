import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '../../reportWebVitals';
import store from '../../redux/store/store';
import { Provider } from 'react-redux';
import Grid from './Grid';
import { useDispatch } from 'react-redux';
import App from './App';

function Usuarios(){
  const dispatch = useDispatch();
  const [showForm, setShowFrom] = useState(false);
  const [idUserEdit, setUserEdit] = useState(0)


const showTable = () => {
  setShowFrom(prevShowFrom => !prevShowFrom);
  if (showForm) {
    setUserEdit(idUserEdit);
  }
}

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