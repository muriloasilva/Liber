import sql from 'mssql'
import { db } from './src/utils/DB.js'

//a conexão em si, para utilizar dentro das operações do Model.

export async function poolConnect(){
    try {
        const pool = new sql.ConnectionPool(db)

        await pool.connect()

        return pool
    } 
    catch (error) 
    {
        return(error)
    }
}