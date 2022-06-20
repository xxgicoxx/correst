const express = require('express');
const { param } = require('express-validator');

const track = require('../services/track');
const constants = require('../utils/constants');

const routes = express();

routes.get('/:code', [
  param('code').isLength({
    min: constants.CODE_MIN,
    max: constants.CODE_MAX,
  }).withMessage(constants.ERROR_INVALID_CODE),
], track.get);

module.exports = routes;
