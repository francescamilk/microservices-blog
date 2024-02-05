import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json())
.use(cors());

const posts = {}

app.get('/posts', (_req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }
    
    if (type === 'CommentCreated') {
        const { id, content, postId } = data;
        const post = posts[postId];
        post.comments.push({ id, content });
    }

    res.send({});
});

app.listen(4002, () => {
    console.log('Listening on port 4002 ~ query');
});