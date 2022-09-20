import express from 'express'
import { UsuarController } from './src/controllers/usuarCtrl.js'

//as rotas que enviam dados para o controller.

const routes = express.Router()

routes.get('/usuario/get', UsuarController.getUser)
routes.post('/usuario/insert', UsuarController.insertUser)
routes.put('/usuario/update/:userID', UsuarController.updateUser)
routes.delete('/usuario/delete/:userID', UsuarController.deleteUser)
routes.post('/usuario/login', UsuarController.loginUser)

export { routes }