import express from 'express';

const app = express();

// rota = tudo
// recurso = usuario
// metodo http = get, post, put, delete
// parametros =

app.get('/users', (request, response) => {
    return response.json({"message": "hello"})
})

app.listen(3333)