import { Col, Row, Form, Button } from "react-bootstrap";
function primer_forms(carroNombre){
    return(
        <Row>
            <Col>
                <Form.Label>¿Qué nombre tiene su carro?</Form.Label>
            </Col>
            <Col>
                <Form.Control type="text" value={carroNombre.carroNombre}></Form.Control>
            </Col>
            <Col>
                <Button variant="primary">submit</Button>
            </Col>
          </Row>
    )
}
export default primer_forms;