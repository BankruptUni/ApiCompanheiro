/** Sql padrão para captura dos registros da tabela Estacao
 * @param search parametro de comparação (descricao) capturados por texto 
 * @param params parametros de comparação 
*/
let getAll = (search = "", ...params) => {
    const condicoes = [];    
    let stringBuilder = "SELECT A.* from BICICLETA A";
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
let gravar = (objeto = {usuario_id: NaN, lugares: 0}) => {    
    let stringBuilder = `INSERT INTO BICICLETA (usuario_id, lugares, descricao) 
                         VALUES (${usuario_id}, ${lugares}, '${descricao}')
                         ON DUPLICATE KEY UPDATE bicicleta 
                         set usuario_id = ${usuario_id}, lugares = ${lugares}, descricao = '${descricao}';`;
                         return stringBuilder;
    
}
let remove = (id) => {
    let stringBuilder = `DELETE FROM bicicleta WHERE ID = '${id}'`;
    return stringBuilder;
}
export const GetAll = getAll, GetByUsuario = getByUsuario, Gravar = gravar, Remove = remove;