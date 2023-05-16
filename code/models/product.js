const { getPool } = require("../database");

module.exports = {
    async index() {
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from product");
            await  conn.commit();

            response = result;
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },
    
    async create(params) {
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const insert = await conn.query("insert into product (name, price) values(?, ?)", [params["name"], params["price"]]);
            const result = await conn.query("select * from product where id = ?", [insert.insertId]);
            await  conn.commit();

            response = result[0];
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    }
}