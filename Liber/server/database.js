
/*Serve apenas para guardar as informações do banco. 
Lembre-se de estar com o wamp ativo na hora de utilizar e que o nome do banco dentro do
phpmyadmin precisa ser 'testes'

Host = servidor - nesse caso o 'local', dentro da máquina - onde o banco está sendo hospedado
user = usuário do servidor, que, por padrão, está como 'root'
password = senha para acessar o servidor
database = nome do banco dentro do phpmyadmin
*/

export const dbConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"testes",
}