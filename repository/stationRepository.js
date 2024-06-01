let getAll = (search = "", ...params) => {
    const condicoes = [];    
    let stringBuilder = "SELECT A.* from ESTACAO A";
    if(search || params.length > 0) {
        stringBuilder += "WHERE";     
    }
    for(let { key, value } of params) {        
        condicoes.push(`${key} = ${value}`);
    }
    condicoes.forEach(function(condicao) {
        stringBuilder += condicao;
    });
    return stringBuilder;
}
let getById = (id) => { 
    return GetAll("", {id:id});
}
export const GetAll = getAll, GetById = getById;