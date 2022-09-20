import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { Generos } from './pages/generos';
import { Registro } from './pages/registro';
import { Login } from './pages/entrar';
import { Home } from './pages/home';
/* Esse arquivo serve para o arquivo main.jsx ficar mais limpo, ele é enviado para app.jsx e depois vai para main.jsx. 
ao invés de colocar os links diretamente no arquivo main, é colocado aqui.*/
 export function Rotas(){

  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Registro />}></Route>
      <Route path="/home" exact element={<Home />}></Route>
      <Route path="/entrar" exact element={<Login />}></Route>
      <Route path='/generos' exact element={<Generos/>}></Route>
    </Routes>
  </BrowserRouter>
    )
}