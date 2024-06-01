/** Sql padrão para captura dos registros da tabela Estacao
 * @param search parametro de comparação (descricao) capturados por texto 
 * @param params parametros de comparação 
*/
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
let gravar = (objeto = {}) => {
    if (Object.keys(objeto).length > 0) { 
        let stringBuilder = "INSERT INTO ESTACAO () VALUES () ON DUPLICATE KEY UPDATE";
    }
}
export const GetAll = getAll, GetById = getById, Gravar = gravar;