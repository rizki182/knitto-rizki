const { getPool } = require("../database");

module.exports = {
    async index() {
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from product");
            await  conn.commit();

            response = result.rows;
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    }
}