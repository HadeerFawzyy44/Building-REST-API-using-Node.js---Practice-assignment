const express = require('express');
const categoryController = require('../controllers/categoryController');

function routes(category) {
  const categoryRouter = express.Router();
  const controller = categoryController(category);
  categoryRouter.route('/')
     .post(controller.post)
     .get(controller.get);

     
  return categoryRouter
  }

module.exports= routes;