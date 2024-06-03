const stationBusiness = await import("../business/estacaoBusiness");
const usuarioBusiness = await import("../business/usuarioBusiness");
const express = require("express");
const json = require("../data/data.json");
const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: json.host, 
    user:json.user, 
    password: json.password,
    connectionLimit:json.connectionLimit,
});
const app = express();

app.get("/getEstacao", (request, response) => {
    const { id, userId } = request.query;
    const array = [];
    if(id) {        
        let station = null;
        let {objeto, ok, count} = stationBusiness.FindById(id, pool);
        if(ok) {
            objeto.forEach(data => array.push(data));
        }
    }
    else if(userId) {
        let stations = null;
        for(let station of stations) {
            array.push(station);
        }
    }
    response.send(array);
});

app.post("/gravarEstacao", (request, response) => {
    const { id, userId } = request.query;
    const array = [];
    if(id) {        
        let station = null;
        let {objeto, ok, count} = stationBusiness.Gravar(id);
        if(ok) {
            objeto.forEach(data => array.push(data));
        }
    }
    else if(userId) {
        let stations = null;
        for(let station of stations) {
            array.push(station);
        }
    }
    response.send(array);
});

app.post("/deleteEstacao", (request, response) => {
    const id = request.body.id;
    const retorno = {
        ok:false, 
        objeto:id
    };
    
    if(id) {
        let station = null;
        array.push(objeto);
    }
    else if(userId) {
        let stations = null;
        for(let station of stations) {
            array.push(station);
        }
    }
    response.send(retorno);
});

app.get("/getUsuario", (request, response) => {
    const { id, userId } = request.query;
    const array = [];
    if(id) {        
        let station = null;
        let {objeto, ok, count} = usuarioBusiness.FindById(id);
        if(ok) {
            objeto.forEach(data => array.push(data));
        }
    }
    else if(userId) {
        let stations = null;
        for(let station of stations) {
            array.push(station);
        }
    }
    response.send(array);
});

app.post("/gravarUsuario", (request, response) => {
    const { id, userId } = request.query;
    const array = [];
    if(id) {        
        let station = null;
        let {objeto, ok, count} = usuarioBusiness.FindById(id);
        if(ok) {
            objeto.forEach(data => array.push(data));
        }
    }
    else if(userId) {
        let stations = null;
        for(let station of stations) {
            array.push(station);
        }
    }
    response.send(array);
});

app.post("/deleteUsuario", (request, response) => {
    const id = request.body.id;
    const retorno = {
        ok:false, 
        objeto:id
    };
    
    if(id) {
        let station = null;
        array.push(objeto);
    }
    else if(userId) {
        let stations = null;
        for(let station of stations) {
            array.push(station);
        }
    }
    response.send(retorno);
});

app.listen(json.api_port);