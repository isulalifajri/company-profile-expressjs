const { pool } = require("../config/database");

class Contact {

    static async create(data) {

        const { name, email, message } = data;

        const query = `
            INSERT INTO contacts (
                name,
                email,
                message
            )
            VALUES ($1, $2, $3)
            RETURNING *
        `;

        const values = [
            name,
            email,
            message
        ];

        const result = await pool.query(query, values);

        return result.rows[0];
    }

    static async findAll() {

        const query = `
            SELECT *
            FROM contacts
            ORDER BY id DESC
        `;

        const result = await pool.query(query);

        return result.rows;
    }

    static async findById(id) {

        const query = `
            SELECT *
            FROM contacts
            WHERE id = $1
        `;

        const result = await pool.query(query, [id]);

        return result.rows[0];
    }

    static async update(id, data) {

        const { name, email, message } = data;

        const query = `
            UPDATE contacts
            SET
                name = $1,
                email = $2,
                message = $3,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $4
            RETURNING *
        `;

        const values = [
            name,
            email,
            message,
            id
        ];

        const result = await pool.query(query, values);

        return result.rows[0];
    }

    static async delete(id) {

        const query = `
            DELETE FROM contacts
            WHERE id = $1
            RETURNING *
        `;

        const result = await pool.query(query, [id]);

        return result.rows[0];
    }

}

module.exports = Contact;