const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectRouter = require('./data/helpers/projectRouter.js');
const actionRouter = require('./data/helpers/actionRouter.js');

const server = express();

server.use(express.json());
server.use(cors())
server.use(helmet());

server.use('/api/project', projectRouter);

server.use('/api/action', actionRouter);

server.get('/', (req, res, next) => {
  res.send(`
    <h2>Node Express</h2>
    <p>Welcome to the Express Sprint</p>
    `);
});

module.exports = server;