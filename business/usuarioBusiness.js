const repository = require("../repository/usuarioRepository.js");
const repoTrajeto = require("../repository/trajetoRepository.js");
const repoBicicleta = require("../repository/bicicletaRepository.js");
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
const findById = async(id = NaN) => {
    let conn;
    try { 
        let query = repository.getAll();
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
/**Método de verificação de Login
 * @param login Login do Usuário
 * @param password Senha do Usuário
 */
const getLogin = async(login = "", senha = "") => {
    let conn;
    try { 
        let query = repository.getAll("", [{login:login}, {senha:senha}]);
        conn = await pool.getConnection();

        const rows = await conn.query(query);
        return {
            ok: rows.length > 0? true : false,
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
const gravar = async(objeto = {}) => {
    let conn;
    let retorno = {
        ok: false, 
        id: null,
        count: 0
    };
    try {
        if (Object.keys(objeto).length > 0) {
            let command = repository.gravar(objeto);
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
        let command = repository.remove(id);
    }
    catch(exception) {
        if(conn) {
            conn.end;
        }
    }
}
const getBicicletasByUsuario = (usuario = NaN) => {
    let command;
    repoBicicleta.getByUsuario(usuario);
};
const getTrajetosByUsuario = (usuario = NaN) => {
        let command;
        repoTrajeto.getByUsuario(usuario);
};
module.exports = {
    findById,
    gravar,
    deleteById,
    getBicicletasByUsuario,
    getTrajetosByUsuario,
    getLogin
};                         