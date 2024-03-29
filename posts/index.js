import express from 'express';
import bodyParser from 'body-parser';
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(bodyParser.json())
.use(cors());

const posts = {};

app.get('/posts', (_req, res) => {
    res.send(posts);
});

app.post('/posts/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = { id, title };

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: { id, title }
    }).catch((err) => {
        console.log(err.message);
    });

    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Event Received: ', req.body.type);
    res.send({});
});

app.listen(4000, () => {
    console.log('v2');
    console.log('Listening on port 4000 ~ posts');
});