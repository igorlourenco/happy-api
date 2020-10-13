import express from 'express';

import './database/connection';

const app = express();
app.use(express.json());

// rota = tudo
// recurso = usuario
// metodo http = get, post, put, delete
// parametros =

app.get('/users', (request, response) => {
    return response.json({"message": "hello"})
})

app.listen(3333)