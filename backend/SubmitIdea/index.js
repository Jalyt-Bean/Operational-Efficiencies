
##test
const sql = require('mssql');

module.exports = async function (context, req) {
    const { title, description, departments } = req.body;

    if (!title || !description) {
        context.res = {
            status: 400,
            body: "Missing required fields: title or description"
        };
        return;
    }

    const config = {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
        options: {
            encrypt: true
        }
    };

    try {
        await sql.connect(config);
        await sql.query`
            INSERT INTO Ideas (title, description, departments)
            VALUES (${title}, ${description}, ${departments.join(', ')})
        `;

        context.res = {
            status: 200,
            body: { message: "Idea submitted successfully" }
        };
    } catch (err) {
        context.log.error('DB Error:', err);
        context.res = {
            status: 500,
            body: "Something went wrong submitting the idea."
        };
    }
};
