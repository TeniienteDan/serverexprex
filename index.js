//importar modulo de express, se guarda en una constante llamada express
const express = require('express');

//instanciar el odulo en una app
//desde aquí será llamado en futuros endpoints
const app = express();

//SOLICITUDES:
//configuro la primera respuesta a una solicitud
//index
app.get('/', (req, res)=>{
    res.send('ola server configurado');
});
//login
app.get('/login', (req, res)=>{
    res.send('bienvenido al login');
});

//RESPUESTAS:
//configuro el puerto en el que se escucharan las solicitudes
app.listen(3000, ()=>{
    console.log('server en puerto 3000');
});

//autos
app.get('/autos', (req, res)=>{
    res.send('Listar autos');
});

//aviones
app.put('/updateaviones', (req, res)=>{
    res.send('Actualizar aviones');
});

//trenes
app.get('/trenes', (req, res)=>{
    res.send('Listar trenes');
});