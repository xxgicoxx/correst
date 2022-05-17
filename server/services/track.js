const { validationResult } = require('express-validator');
const Correios = require('correios.js');

const logger = require('../../logger');

const correios = new Correios();

async function get(req, res) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send({ error: errors.array()[0].msg });
    }

    const { code } = req.params;
    const object = await correios.track(code);

    return res.status(200).send(object);
  } catch (error) {
    logger.error(error);

    return res.status(500).send({ error: 'Error, try again later' });
  }
}

module.exports = {
  get,
};
