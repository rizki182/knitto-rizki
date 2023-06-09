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

    async detail(id) {
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from product where id = ?", [id]);
            await  conn.commit();

            response = result[0];
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
    },

    async update(id, params) {
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const update = await conn.query("update product set name = ?, price = ? where id = ?", [params["name"], params["price"], id]);
            const result = await conn.query("select * from product where id = ?", [id]);
            await  conn.commit();

            response = result[0];
            return response;
        } catch (err) {
            await  conn.rollback();
            throw err;
        } finally {
            conn.end();
        }
    },

    async delete(id, params) {
        let response = {}
        let conn = await getPool().getConnection();
        conn.beginTransaction();
        
        try {
            const result = await conn.query("select * from product where id = ?", [id]);
            const remove = await conn.query("delete from product where id = ?", [id]);
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