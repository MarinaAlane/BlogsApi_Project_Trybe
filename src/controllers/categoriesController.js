const createCategory = (req, res) => {
  const { name } = req.body;

  // const category = { name };

  const result = { id: 666, name };

  return res.status(200).json(result);
};

const findCategory = (_req, res) => {
  const message = { message: 'nada alem de tolices' };
  return res.send(message);
};

module.exports = {
  createCategory,
  findCategory,
};