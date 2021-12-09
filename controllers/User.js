const Joi = require('joi');
const ProductsService = require('../services/ProductsService');
const { CREATED_STATUS } = require('../helpers/HTTPCodes');

const create = async (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.email().required(),
    password: Joi.string().size(6).required(),
    image: Joi.string().required(),
  }).validate(req.body);
  if (error) return next(error);
  const { displayName, email, password, image } = req.body;
  const { _id, err: alreadyExistsError } = await ProductsService.create({ 
    displayName, email, password, image, 
  });
  if (alreadyExistsError) return next(alreadyExistsError);
  return res.status(CREATED_STATUS).json({ _id, name, quantity });
};

// const getAll = async (_req, res, _next) => {
//   const products = await ProductsService.getAll();
//   return res.status(OK_STATUS).json({ products });
// };

// const getById = async (req, res, next) => {
//   const { id } = req.params;
//   const product = await ProductsService.getById(id);
//   const { err } = product;
//   if (err) return next(err);
//   return res.status(OK_STATUS).json(product);
// };

// const update = async (req, res, next) => {
//   const { error } = Joi.object({
//     name: Joi.string().min(5).required(),
//     quantity: Joi.number().integer().min(1).required(),
//   }).validate(req.body);
//   if (error) return next(error);
//   const { name, quantity } = req.body;
//   const { id } = req.params;
//   const { _id, err: invalidId } = await ProductsService.update({ _id: id, name, quantity });
//   if (invalidId) return next(invalidId);
//   return res.status(OK_STATUS).json({ _id, name, quantity });
// };

// const remove = async (req, res, next) => {
//   const { id } = req.params;
//   const product = await ProductsService.remove(id);
//   const { err } = product;
//   if (err) return next(err);
//   return res.status(OK_STATUS).json(product);
// };

module.exports = {
  create,
  // getAll,
  // getById,
  // update,
  // remove,
};
