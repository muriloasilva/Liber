import { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, NavLink } from 'reactstrap';
import './index.css'
import Axios  from 'axios'
import { Link } from 'react-router-dom';

export function Registro(){


    /* Isso aqui abaixo é um state para armazenar as variáveis do formulário pelo onChange.
    Podes ver mais abaixo que o nome "HandleChangeValues", que é o que captura essas mudanças, está
    dentro dos inputs, dentro do onChange. */
    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    /* HandleCLickButton serve para disparar o envio dos dados do formulário para o backend. */

    const HandleClickButton = () =>{

            /*New date serve para pegar a data atual do usuário. 'Const data' é uma constante que serve para 
            ajeitar a data do usuário, ficando no padrão brasileiro (Dia/mês/ano)*/

            const current = new Date()
            const data = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

            /*Axios serve para enviar as variáveis do "HandleChangeValues" para o backend, utilizando o método
            post.
            Primeiro, dentro de chaves, vem o link http de onde o server do express está. Lembre-se de dar "npm run
            dev" dentro da pasta server e da pasta do react, se não, não funcionará o código.
            Separado por uma virgula vem as variáveis que serão enviadas: Nome, email, senha, type(tipo de usuário)
            e o dia atual.*/

            Axios.post('http://localhost:3001/usuario/insert',{
            nome:values.nome,
            email:values.email,
            senha:values.senha,
            insertDate: data}).then((response)=>(console.log(response)))
            
            
    };

    return(
        
        /* Não lembro como colocar anotações dentro das divs, então escreverei tudo aqui.
        As divs por fora servem apenas para centralizar o conteúdo, as com as classes: "page" e "central".
        
        A partir do "Form" em diante é sintaxe do reactstrap, que serve para colocar o bootstrap dentro do react.
        
        FormGroup são os grupos dos inputs, que separa ele dos outros na estilização
        
        input é como os inputs normais. Col eu esqueci o que era, mas tem relação com a posição dos objetos. Teste
        caso deseje tirar a duvida, mas retorne ao que era se achar que fez algo errado.
        
        o resto das coisas dentro dos inputs são como no HTML normal, com uma sintaxe um pouco diferente.
        ID serve pra ser o id do input; Name o nome; placeholder o texto que aparece dentro da caixa, sem
        ser um texto de paragráfo; Type o tipo de input e onChange o que envia a variável para o State la em cima.
        
        o value nos inputs de radio são os valores enviados para o banco, 1 e 2, e não altere o "Name" desses inputs,
        pois eles deixarão de funcionar. 
        (Sim, eu fiquei um bom tempo tentando entender de onde vinha esse erro,
        pois os radios viram dois inputs diferentes quando você altera o nome. Assim, quando você marcava um
        e o outro, eles ficavam marcados sem trocar a seleção.*/

        <>
        <div className='pageReg'>
        <div className='centralReg'>
            <Form>
                <h1>Cadastro</h1>
                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            type="text"
                            onChange={HandleChangeValues}
                        />
                    </Col>
                </FormGroup>

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

                <FormGroup>
                <Link 
                    to='/entrar'
                    className='link'
                >Caso ja tenha uma conta</Link>
                </FormGroup>

                <Button
                    block
                    color="light"
                    size=""
                    onClick={() => HandleClickButton()}
                >Enviar
                </Button>
            </Form>
        </div>
        </div>
        </>
    )
}