import { Usuar } from "../models/usuarModel.js"

/* O controller se liga ao view e a model, não deixando que os dois passem dados diretamente.

mesmo com aqueles IFs da model, foi necessário colocar as variáveis para enviar em todas as operações. Pois elas
precisam ser declaradas e enviadas, mesmo estando Null. Porém, isso é resolvido só dando CTRL C e CTRL V, então
acelera bastante o trabalho.*/

export class UsuarController{
    static async getUser(req, res){
        try {
                const produtos = await Usuar.get()
                return res.status(200).json(produtos)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }


    static async insertUser(req, res){
        try {
                const { email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg } = req.body
                const newProd = await new Usuar( email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg).insert()
                return res.status(200).json(newProd)
        } 
        catch (error) 
        {
            console.log(error) 
            return res.status(500).json(error) 
        }
    } 

    static async updateUser(req, res){
        try {
                const { userID } = req.params
                const { email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg } = req.body
                const alterProd = await new Usuar(email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg, userID).update()
                return res.status(200).json(alterProd)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async deleteUser(req, res){
        try {
                const { userID } = req.params
                const { email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg } = req.body
                const delProd = await new Usuar(email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg, userID).delete()
                return res.status(200).json(delProd)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async loginUser(req, res){
        try {
            const { email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg } = req.body
            const loginUser = await new Usuar(email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg).login()
            return res.status(200).json(loginUser)
        } 
        catch (error) {
            console.log('login ' + error)
        }
    }

}