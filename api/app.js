const stationBusiness = require("../business/estacaoBusiness.js");
const usuarioBusiness = require("../business/usuarioBusiness.js");
const fs = require("fs");
const https = require("https");
const express = require("express");
const json = require("../data/data.json");
const app = express();
app.use(express.json())

const options = {
    key: fs.readFileSync("../data/localhost-key.pem"),
    cert: fs.readFileSync("../data/localhost.pem"),
}
app.get("/getEstacao", async(request, response) => {
    const { id, userId } = request.query;
    const array = [];
    try {
        if(id) {        
            let station = null;
            let {objeto, ok, count} = await stationBusiness.findById(pool, id);
            if(ok) {
                objeto.forEach(data => array.push(data));
            }
        }
        else if(userId) {
            let {objeto, ok, count} = await stationBusiness.findById(pool, null, userId);
            for(let station of stations) {
                array.push(station);
            }
        }
        response.json(array);   
    }
    catch(exception) {

    }    
});

app.post("/gravarEstacao", async(request, response) => {
    const { id, userId } = request.query;
    const array = [];
    if(id) {        
        let station = null;
        let {objeto, ok, count} = stationBusiness.gravar(id);
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
    response.json(array);
});

app.post("/deleteEstacao", async(request, response) => {
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
    response.json(retorno);
});

app.get("/getUsuario", async(request, response) => {
    const { id, userId } = request.query;
    let retorno = null;
    if(id) {        
        let station = null;
        retorno = await usuarioBusiness.findById(id);
        if(retorno.ok) {
            //objeto.forEach(data => array.push(data));
        }
    }
    
    response.json(retorno);
});

app.post("/getLogin", async(request, response) => {
    const { login, senha } = request.body;
    let retorno = null;
    if(login && senha) {                
        retorno = await usuarioBusiness.getLogin(login, senha);
        if(retorno.ok) {
            //objeto.forEach(data => array.push(data));
        }
    }
    
    response.json(retorno);
});

app.post("/gravarUsuario", async(request, response) => {
    const { id, userId } = request.query;
    const array = [];
    if(id) {        
        let station = null;
        let {objeto, ok, count} = usuarioBusiness.findById(id);
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
    response.json(array);
});

app.post("/deleteUsuario", (request, response) => {
    const id = request.body.id;
    const retorno = {
        ok:false,
        message:"", 
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
    response.json(retorno);
});
const server = https.createServer(options, app);
server.listen(json.api_port);
