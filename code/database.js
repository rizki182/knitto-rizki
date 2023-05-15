const mariadb = require('mariadb');

let pool

module.exports = {
    getPool: (callback) => {
        if (pool) {
            return pool;
        } else {
            pool = mariadb.createPool({
                host: 'mariadb', 
                user:'knitto', 
                database: 'db_project_rizki',
                password: 'knitto',
                connectionLimit: 5
           });
    
           return pool
        }
    }
}