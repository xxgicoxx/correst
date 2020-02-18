const { validationResult } = require('express-validator');
const correios = require('correios.js');

async function get(req, res) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422);
      res.send({ error: errors.array()[0].msg });
    } else {
      const { code } = req.params;
      const object = await correios.track(code);

      res.status(200);
      res.send(object);
    }
  } catch (ex) {
    res.status(500);
    res.send({ error: 'Error, try again later' });
  }
}

module.exports = {
  get,
};
