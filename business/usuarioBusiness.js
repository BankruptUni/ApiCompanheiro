const repository = await import("../repository/usuarioRepository");

/**Método de aquisição dos objetos do banco via Id
 * @param id Id da requisição
 */
const findById = async(id = NaN, pool) => {
    let conn;
    try { 
        let query = repository.GetAll();
        conn = await pool.getConnection();

        const rows = await conn.query(query);
        return {
            ok: true,
            objeto: rows, 
            count: 0
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
    let retorno = {
        ok: false, 
        id: null,
        count: 0
    };
    try {
        if (Object.keys(objeto).length > 0) {
            let command = repository.Gravar(objeto);
            conn = await pool.getConnection();
    
            const rows = await conn.query(command);            
            retorno.id = rows;
        }
        retorno.ok = true;                        
        retorno.count = 0;
    }
    catch(exception) { 
        if(conn) {
            conn.end;
        }
        throw exception;
    }
    return retorno;
}
const deleteById = (id = NaN) => {
    let conn;
    try{
        let command = repository.Delete(id);
    }
    catch(exception) {
        if(conn) {
            conn.end;
        }
    }
}
export const FindById = findById, Gravar = gravar, Delete = deleteById;