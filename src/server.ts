import express from 'express';
import './database/connection';
import {getRepository} from 'typeorm';
import Orphanage from "./models/Orphanage";

const app = express();
app.use(express.json());

// rota = tudo
// recurso = usuario
// metodo http = get, post, put, delete
// parametros =

app.post('/orphanages', async (request, response) => {
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });

    await orphanagesRepository.save(orphanage);

    return response.json({"success": "ok"})
})

app.listen(3333)