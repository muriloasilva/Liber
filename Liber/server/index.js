import express from "express";
import cors from 'cors'
import { testCon } from "./testConnect.js";
import { routes } from "./routes.js";

//onde o servidor sobe para o ar, com mais algumas coisas sendo utilizadas.

const port = process.env.PORT = 3001
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}),
)

app.use(routes)


testCon().then((res) => {
    if(res == true){
        app.listen(port, ()=>{
            console.log('server on ' + port)
        })
    }
})

