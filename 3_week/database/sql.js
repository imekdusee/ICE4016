import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'dbuser',
        database: 'dbdesign',
        password: 'database',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

const sql = {

    getUsers : async () => {
        const [rows] = await promisePool.query(`
            SELECT * FROM student
        `)

        return rows
    },
}

module.exports = sql
