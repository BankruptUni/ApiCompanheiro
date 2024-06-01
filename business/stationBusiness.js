const repository = await import("../repository/stationRepository")
const maria = require("mariaDB");

const pool = mariadb.createPool({
    host: 'localhost', 
    user:'root', 
    password: 'masterkey',
    connectionLimit: 5
});
/**Método de aquisição dos objetos do banco via Id
 * @param id Id da requisição
 */
const findById = async function(id = NaN) {
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