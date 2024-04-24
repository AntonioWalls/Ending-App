import App from './App';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './Grid';

function ButtonRender() {
    const[flag, setFlag] = useState(false);

    function Click(t){
        setFlag(t = true)
    }
    return (
        flag ?
            RenderApp() : RenderGrid()
    )

    function RenderGrid() {
        return (
            <div>
                <Grid />
                <Button onClick={Click}>Mostrar form</Button>
            </div>
        )
    }

    function RenderApp() {
        return(
            <div>
                <App flag = {true}/>
            </div>
        );
    }

    
}

export default ButtonRender;