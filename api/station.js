const express = require("express");
const app = express();

app.get("/getStation", (request, response) => {
    const {id, userId} = request.query;
    const array = [];
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
    response.send(array);
});

app.post("/deleteStation", (request, response) => {
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

app.listen(8080);