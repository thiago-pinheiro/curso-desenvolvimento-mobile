const {request, response} = require("express")
const express = require("express") //importamos
const app = express() //atribuimos as funções a variavel

app.use(express.json())

//query paramms(listar, filtrar as minhas informções)
//route params(identificar recursos -> atualizar e deletar)
//request body(criara ou editar um recurso -> JSON)

//exemplo de query
//http://localhost:3333/users?search=chris
//http://localhost:3333/users?search=chris&page=5



app.get("/projeto", (request, response) => {
    const query = request.query
console.log(query)
    return response.json([
       "Projeto 1",
       "Projeto 2"
    ])
})

app.post("/projeto", (request, response) => {
    const body = request.body
console.log(body)
    return response.json([
       "Projeto 1",
       "Projeto 2",
       "Projeto 3"
    ])
})

app.put("/projeto/:id", (request, response) => {
    const params = request.params
    console.log(params)
    return response.json([
       "Projeto 4",
       "Projeto 2",
       "Projeto 3"
    ])
})
//http://localhost:3333/projeto/4

app.delete("/projeto/:id", (request, response) => {
    const params = request.params
    console.log(params)
    return response.json([
       "Projeto 2",
       "Projeto 3"
    ])
})


app.listen(3333, () => {
    console.log("Back-end started !!")
})