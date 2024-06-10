const repository = await import("../repository/estacaoRepository");
const repoBicicleta = await import("../repository/bicicletaRepository");
const repoVaga = await import("../repository/vagaRepository");

/**Método de aquisição dos objetos do banco via Id
 * @param id Id da requisição
 */
const findById = async(id = NaN, pool) => {
    let conn;
    let retorno = 
        {
            ok: false, 
            objeto: null, 
            count:0
        };
    try { 
        let query = repository.GetAll();
        conn = await pool.getConnection();

        const rows = await conn.query(query);
        for(let record of retorno.objeto) {
            reporecord.id
        }
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
const gravar = async(objeto = {}, pool) => {
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