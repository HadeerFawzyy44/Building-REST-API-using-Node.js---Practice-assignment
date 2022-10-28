const express = require("express");
const productController = require("../controllers/productController");

function routes(product) {
  const productRouter = express.Router();
  const controller = productController(product);
  productRouter
    .route("/")
    .post((req, res) => {
      try {
        controller.post(req, res);
      } catch (e) {
        res.status(400); 
        return res.json({ error: e });
      }
    })
    .get((req, res) => {
      try {
        controller.get(req, res);
      } catch (e) {
        res.status(400);
        return res.json({ error: e });
      }
    });
  productRouter.use("/:id", (req, res, next) => {
    product.findById(req.params.id, (err, product) => {
      if (err) {
        return res.send(err);
      }
      if (product) {
        req.product = product;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  productRouter
    .route("/:id")
    .get((req, res, next) => {
      try {
        res.status(200);
        return res.json({
          success: true,
          results: req.product,
        });
      } catch (e) {
        res.status(400);
        return res.json({ error: e });
      }
    })
    .put((req, res, next) => {
      try {
        const { product } = req;
        product.Name = req.body.Name;
        product.Price = req.body.Price;
        product.ImgURL = req.body.ImgURL;
        product.categoryID = req.body.categoryID;
        req.product.save((err) => {
          if (err) {
            res.status(400);
            return res.send(err);
          }
          return res.json(product);
        });
      } catch (e) {
        res.status(400);
        return res.json({ error: e });
      }
    })
    .patch((req, res) => {
      try {
        const { product } = req;
        if (req.body._id) {
          delete req.body._id;
        }
        Object.entries(req.body).forEach((item) => {
          const key = item[0];
          const value = item[1];
          product[key] = value;
        });
        req.product.save((err) => {
          if (err) {
            return res.send(err);
          }
          return res.json(product);
        });
      } catch (e) {
        res.status(400);
        return res.json({ error: e });
      }
    })
    .delete((req, res) => {
      req.product.remove((err) => {
        if (err) {
          return res.send(err);
        }
        res.sendStatus(204);
      });
    });

  return productRouter;
}

module.exports = routes;
