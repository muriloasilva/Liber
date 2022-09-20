import { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import './index.css'
import Axios  from 'axios'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';

/* Essa página é quase a mesma coisa da pagina "Registro". Só explicarei sobre o axios aqui. 

por hoje é só, darei prosseguimento outro dia.

o outro dia chegou*/

export function Login(){

    /* o state aqui é reaproveitado da tela registro */

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };


    /* Const navigate serve para navegar entre as páginas através de funções */
    const navigate = useNavigate()



    const HandleClickButton = () =>{


        /* o axios está enviando as variaveis para o backend, lá dentro do backend ele é conferido e é dado return nas variaveis
        
        o return dele é guardado em "response" em forma de array. Nesse caso ele está na posição"[0]", que é o mesmo que a primeira posição
        
        apos ser conferido no "if" o navigate muda a página para a pagina conteudo.
        "Replace:true" serve para o usuário entrar na pagina e não poder retornar no histórico*/

        Axios.post("http://localhost:3001/usuario/login", {
            email: values.email,
            senha: values.senha
        }).then((response) =>{
    
            if (values.email == response.data[0].email && values.senha ==  response.data[0].senha){
              //  navigate('/generos', {replace: true})
            }
        })
        
            
        
    }

    return(
        
        <>
        <div className='page'>
        <div className='central'>
            <Form>

                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            type="email"
                            onChange={HandleChangeValues}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col sm={12}>
                        <Input
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            type="password"
                            onChange={HandleChangeValues}
                        />
                    </Col>
                </FormGroup>

                <Button
                    block
                    color="light"
                    size=""
                    onClick={() => HandleClickButton()}
                    type="button"
                >Enviar
                </Button>
            </Form>
        </div>
        </div>
        </>
    )
}