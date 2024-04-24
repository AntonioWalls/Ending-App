import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './Grid'
function App() {



  return (
    <Card>
      <Card.Header className='header'>
        <Card.Title>Registro de usuario</Card.Title>
      </Card.Header>

      <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
            
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu apellido paterno" />
          
            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu apellido materno" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" />

            <Form.Label>Confirma tu Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña nuevamente" />
            <Form.Text className="text-muted">
              Nunca compartas tu contraseña con nadie más.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          
          <Button onClick={Click} variant="primary" type="submit">
            Regresar
          </Button>


        </Form>
      </Card.Body>
        </Card>
  );
  function Click(){
    <Grid />
  }
  
}
export default App;