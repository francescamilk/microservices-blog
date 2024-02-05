import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.json())

app.post('/events', (req, res) => {
    console.log('Event Received: ', req.body.type);
    res.send({});
});

app.listen(4003, () => {
    console.log('Listening on port 4003 ~ moderation');
});