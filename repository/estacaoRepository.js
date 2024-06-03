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
    return GetAll("", { id: id });
}
let gravar = (objeto = {}) => {
    
    let stringBuilder = `INSERT INTO ESTACAO (documento, nome, e_tipo_cliente, forma_pagamento, login, senha) 
                         VALUES ('${documento}', '${nome}', ${e_tipo_cliente}, ${forma_pagamento}, '${login}', '${senha}')
                         ON DUPLICATE KEY UPDATE usuario set documento = '${documento}', nome = '${nome}', e_tipo_cliente = ${e_tipo_cliente}, 
                         forma_pagamento = ${forma_pagamento}, login = '${login}', senha = '${senha}';`;
    
}
export const GetAll = getAll, GetById = getById, Gravar = gravar;