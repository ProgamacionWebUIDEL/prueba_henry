import React, { useState } from "react";
import { Button, Checkbox, Form} from 'semantic-ui-react';
import axios from 'axios';
var qs = require('qs');

export default function Create_alimento(){
    const [tipo_alimento, settipo_alimento] = useState('');
    const [tipo_mascota, settipo_mascota] = useState('');
    const [cantidad, setcantidad] = useState('');
    const [valor, setvalor] = useState('');
    
    const enviarDatos= ()=>{
        console.log(tipo_alimento);
        console.log(tipo_mascota);
        console.log(cantidad);
        console.log(valor);
        
        var data = qs.stringify({
        'nombre': tipo_alimento,
        'direccot': tipo_mascota,
        'anio_estreno': cantidad,
        'idioma': valor
        });
        var config = {
        method: 'post',
        url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula',
        headers: { 
            'api-key': '4mkCUHmLjIP4xADk6wXFvmGTFsr5HsRUqN8NVCuGRMu5cyzfJIndBSuQ7FwImz0z', 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            window.alert("Alimento guardad correcrttamente")
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            window.alert("Ocurrio un error")

        console.log(error);
        });

    } 

    return(

<Form className="formulariouide">
    <Form.Field>
        <label>Tipo de la alimentos</label>
        <input placeholder='Mascota' onChange={(e) => settipo_alimento(e.target.value)}/>
    </Form.Field>
    <Form.Field>
        <label>tipo_mascota</label>
        <input placeholder='tipo_mascota' onChange={(e) => settipo_mascota(e.target.value)}/>
        
    </Form.Field>
    <Form.Field>
        <label>Raza</label>
        <input placeholder='cantidad'  onChange={(e) => setcantidad(e.target.value)}/>
         
    </Form.Field>
    <Form.Field>
        <label>Edad</label>
        <input placeholder='valor' onChange={(e) => setvalor(e.target.value)} />
    </Form.Field>
    
   
    <Button onClick={enviarDatos} type='submit'>GUARDAR</Button>
</Form>
    ) 
    
}

