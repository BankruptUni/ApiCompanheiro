const repository = require("../repository/estacaoRepository.js");
const repoBicicleta = require("../repository/bicicletaRepository.js");
const repoVaga = require("../repository/vagaRepository.js");
const json = require("../data/data.json");
const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: json.host, 
    user:json.user,
    database:"ciclo_companheiro", 
    password: json.password,
    connectTimeout:json.connectTimeout,
    connectionLimit:json.connectionLimit,
});

/**Método de aquisição dos objetos do banco via Id
 * @param id Id da requisição
 */
const findById = async(id = NaN, userId = NaN) => {
    let conn;
    let retorno = 
        {
            ok: false, 
            objeto: null, 
            count:0
        };
    try { 
        let query = repository.getAll();
        conn = await pool.getConnection();

        const rows = await conn.query(query);
        for(let record of retorno.objeto) {
            
            let bicicletas = conn.query(repoBicicleta.getByEstacao(record.id));
            let vagas = conn.query(repoVaga.getByEstacao(record.id));
            
            record.bicicletas = bicicletas?? [];
            record.vagas = vagas?? [];            

        }
        retorno.ok = true;
        return retorno;
    }
    catch(exception) { 
        if(conn) {
            conn.end;
        }
        throw exception;
    }
}
/** Método para gravação de registro na tabela Estacao
 * @param objeto Registro passado pela api
*/
const gravar = async(objeto = {}) => {
    let conn;
    try { 
        let query = repository.getAll();
        conn = await pool.getConnection();

        const rows = await conn.query(query);
        return {
            ok: false, objeto: rows, count:0
        };
    }
    catch(exception) { 
        if(conn) {
            conn.end;
        }
        throw exception;
    }
}
module.exports = {
    findById, 
    gravar
};

