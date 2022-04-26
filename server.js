require('dotenv').config();

const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const expressConfig = require('./server/configs/express');
const track = require('./server/routes/track');

const logger = require('./logger');

const app = express();

app.use(cors({ origin: '*' }));
app.use(helmet({ hidePoweredBy: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/track', track);

const server = http.createServer(app);

server.listen(expressConfig.port, () => {
  logger.info(`Server listening on port ${expressConfig.port}`);
});
