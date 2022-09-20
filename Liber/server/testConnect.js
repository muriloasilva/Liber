import sql from 'mssql'
import { db } from './src/utils/DB.js'

//Aqui testa a conexão, antes de subir o servidor.

export async function testCon(){


    sql.on('error', err =>{
        console.log('erro testCon ' + err)
        return false
    })

    const pool = await sql.connect(db)
    
    try {
        if (pool._connected == true){
            console.log('Conexão funcionando')
            pool.close()
            return true
        }else{
            console.log('erro na conexão ' + pool)
            pool.close()
            return false
        }
        
    } 
    catch (error) 
    {
        console.log(error)
        pool.close()
    }

}