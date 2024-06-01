const repository = await import("../repository/stationRepository");
const maria = require("mariaDB");

const json = require("../data/data.json");
const pool = mariadb.createPool({
    host: json.host, 
    user:json.user, 
    password: json.password,
    connectionLimit:json.connectionLimit,
});

/**Método de aquisição dos objetos do banco via Id
 * @param id Id da requisição
 */
const findById = async(id = NaN) => {
    let conn;
    try { 
        let query = repository.GetAll();
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
/** Método para gravação de registro na tabela Estacao
 * @param objeto Registro passado pela api
*/
const gravar = async(objeto = {}) => {
    let conn;
    try { 
        let query = repository.GetAll();
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
export const FindById = findById, Gravar = gravar;