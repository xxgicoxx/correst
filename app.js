const http = require('http');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const expressConfig = require('./app/configs/express');
const track = require('./app/routes/track');

const app = express();

app.use(cors({ origin: '*' }));
app.use(logger('dev'));
app.use(helmet({ hidePoweredBy: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/track', track);

const server = http.createServer(app);
server.listen(expressConfig.port);
