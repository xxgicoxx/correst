const express = require('express');
const { param } = require('express-validator');

const track = require('../service/track');

const routes = express();

routes.get('/:code',
  [
    param('code').isLength({ min: 13, max: 13 }).withMessage('Invalid code'),
  ],
  track.get);

module.exports = routes;
