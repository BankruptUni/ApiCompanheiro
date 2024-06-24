/** Sql padrão para captura dos registros da tabela Estacao
 * @param search parametro de comparação (descricao) capturados por texto 
 * @param params parametros de comparação 
*/
let getAll = (search = "", ...params) => {
    const condicoes = [];    
    let stringBuilder = "SELECT A.id,A.nome,A.documento,A.e_tipo_cliente,A.forma_pagamento from trajeto A";
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

let getByUsuario = (usuario) => { 
    return GetAll("", { usuario_id: usuario });
}

let gravar = (objeto = {}) => {
    let {apelido, distancia} = objeto;    
    let stringBuilder = `INSERT INTO TRAJETO (apelido, distancia) 
                         VALUES ('${apelido}', ${distancia})
                         ON DUPLICATE KEY UPDATE trajeto
                         set apelido = '${apelido}', distancia = ${distancia};`;
    return stringBuilder;
}

let remove = (id) => {
    let stringBuilder = `DELETE FROM trajeto WHERE ID = '${id}'`;
    return stringBuilder;
}
module.exports = {
    getAll,
    getByUsuario,
    gravar,
    remove
};