import config from './config';
import apiRouter from './api';

import express from 'express';
const server    =   express();

server.set('view engine', 'ejs');

server.get('/',(req, res) => {
    res.render('index',{
        content: 'Hello Express and <em>Ejs</em>!'
    });
});

server.use('/api',apiRouter);
server.use(express.static('public'));

server.listen(config.port, 'localhost', () => {
    console.log(`Server running at http://localhost:${config.port}/`);
});