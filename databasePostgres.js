import { randomUUID } from "node:crypto"
import { sql } from "./sql.js";
import bcrypt from "bcrypt"

export class DatabasePostgres{
    async lis(){
        try{
            const result = await sql `SELECT * FROM USERS`;
            return result;
        }catch (err){
            console.log("Erro ao listar usuário: ", err);
            return[];
        }
    }

    async create(user){
        const userId = randomUUID();
        const { name, email, password } = user;
        const hashedPassword = await bcrypt.hash(password, 10);

        await sql`
            INSERT INTO users (id, name, email, password) VALUES (${userId}, ${name},
            ${email}, ${hashedPassword})
        `;
    }

    async findByEmail(email){
        const result = await
    }
}