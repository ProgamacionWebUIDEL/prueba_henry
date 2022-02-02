import React, { useState } from "react";
import { Button, Checkbox, Form} from 'semantic-ui-react';
import axios from 'axios';
var qs = require('qs');

export default function Create(){
    const [nombreMascota, setnombremascota] = useState('');
    const [tipo_mascota, settipo_mascota] = useState('');
    const [raza, setraza] = useState('');
    const [edad, setedad] = useState('');
    
    const enviarDatos= ()=>{
        console.log(nombreMascota);
        console.log(tipo_mascota);
        console.log(raza);
        console.log(edad);
        
        var data = qs.stringify({
        'nombre': nombreMascota,
        'direccot': tipo_mascota,
        'anio_estreno': raza,
        'idioma': edad
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
            window.alert("Mascota guardad correcrttamente")
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
        <label>Nombre de la mascota</label>
        <input placeholder='Mascota' onChange={(e) => setnombremascota(e.target.value)}/>
    </Form.Field>
    <Form.Field>
        <label>tipo_mascota</label>
        <input placeholder='tipo_mascota' onChange={(e) => settipo_mascota(e.target.value)}/>
        
    </Form.Field>
    <Form.Field>
        <label>Raza</label>
        <input placeholder='raza'  onChange={(e) => setraza(e.target.value)}/>
         
    </Form.Field>
    <Form.Field>
        <label>Edad</label>
        <input placeholder='edad' onChange={(e) => setedad(e.target.value)} />
    </Form.Field>
    
   
    <Button onClick={enviarDatos} type='submit'>GUARDAR</Button>
</Form>
    ) 
    
}

