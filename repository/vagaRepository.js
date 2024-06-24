/** Sql padrão para captura dos registros da tabela Estacao
 * @param search parametro de comparação (descricao) capturados por texto 
 * @param params parametros de comparação 
*/
let getAll = (search = "", ...params) => {
    const condicoes = [];    
    let stringBuilder = "SELECT A.estacao_id,A.descricao,A.area from vaga A";
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

let getByEstacao = (estacao) => { 
    return GetAll("", { estacao_id: estacao });
}

let gravar = (objeto = {}) => {
    let {estacao_id, descricao, area} = objeto;    
    let stringBuilder = `INSERT INTO VAGA (estacao_id, descricao, area) 
                         VALUES (${estacao_id}, '${descricao}', ${area})
                         ON DUPLICATE KEY UPDATE vaga
                         set estacao_id = '${estacao_id}', descricao = ${descricao}, area = ${area};`;
    return stringBuilder;
}

let remove = (id) => {
    let stringBuilder = `DELETE FROM vaga WHERE ID = '${id}'`;
    return stringBuilder;
}
module.exports = {
    getAll,
    getByEstacao,
   gravar,
   remove
};