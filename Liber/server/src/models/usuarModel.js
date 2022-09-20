import { poolConnect } from "../../poolConnect.js"

const con = await poolConnect()

/* Uma class com um CRUD completo na tabela usuar.
As function async basicamente enviam as operações para o banco.
O constructor está gigantesco, pois ele serve para que não precisemos passar variaveis fantasmas no controller.
Se passarmos essas variáveis em branco, a operação não funciona, mesmo que tenhamos utilizado
apenas uma variável. Esses IFs evitam isso.

o constructor serve para utilizar as variáveis dentro das operações da class, por isso eles são marcados com "This" antes
do nome da variável, pois esse simbolo demonstra que é uma variável de dentro do documento.

aqui ficam as operações de interação com o banco de dados. O próximo passo é transformar esse crud em Procedures dentro do próprio
banco, assim criando uma maior segurança. 

(Também precisa encriptar e fazer outras operações do site... Mas isso não será feito por hoje)

*/

export class Usuar{
    constructor(email, senha, nome, nomePlum, statusUser, insertDate, modDate,fkImg, userID){
        if(email == '' || email == null || email == undefined){
            this.email = ''
        }else{
            this.email = email
        }

        if(senha == '' || senha == null || senha == undefined){
            this.senha = ''
        }else{
            this.senha = senha
        }

        if(nome == '' || nome == null || nome == undefined){
            this.nome = ''
        }else{
            this.nome = nome
        }

        if(nomePlum == '' || nomePlum == null || nomePlum == undefined){
            this.nomePlum = ''
        }else{
            this.nomePlum = nomePlum
        }

        if(statusUser == '' || statusUser == null || statusUser == undefined){
            this.statusUser = 1
        }else{
            this.statusUser = 1
        }

        if(insertDate == '' || insertDate == null || insertDate == undefined){
            this.insertDate = ''
        }else{
            this.insertDate = insertDate
        }

        if(modDate == '' || modDate == null || modDate == undefined){
            this.modDate = ''
        }else{
            this.modDate = modDate
        }

        if(fkImg == '' || fkImg == null || fkImg == undefined){
            this.fkImg = 1
        }else{
            this.fkImg = 1
        }

        if(userID == '' || userID == null || userID == undefined){
            this.userID = ''
        }else{
            this.userID = userID
        }

    }

    static async get(){
        try {
            const { recordset } = await con.query('select * from usuar')
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(`insert into usuar values ('${this.email}', 
            '${this.senha}','${this.nome}', '${this.nomePlum}', ${this.statusUser}, 
            '${this.insertDate}', '${this.modDate}', ${this.fkImg})`)
            return true
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async update(){
        try {
            const { rowsAffected } = await con.query(`update usuar set email = '${this.email}' , 
            senha = '${this.senha}', nome = '${this.nome}', nomePlum = '${this.nomePlum}', modDate = '${this.modDate}',
            fkImg = ${this.fkImg} where userID = ${this.userID}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async delete(){
        try {
            const { rowsAffected } = await con.query(`delete from usuar where userID = ${this.userID}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }
    /* Login está verificando primeiro se a conta existe com o "where" */

    async login(){
        try {
            const { recordset } = await con.query(`SELECT email, senha, userID FROM usuar 
                WHERE email = '${this.email}' and senha = ${this.senha}`)
            if (recordset.length > 0)
                return recordset
            else
                return false
        } 
        catch (error) 
        {
            console.log('Model error ' + error)
            return error
        }
    }
}