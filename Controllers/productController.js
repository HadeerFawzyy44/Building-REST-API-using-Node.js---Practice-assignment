function productController(product) {
  function post(req, res) {
    const Product = new product(req.body);
    Product.save((err, results) => {
      if (err) {
        res.status(404);
        return res.send({
          success: false,
          error: err,
        });
      }
      res.status(201);
      return res.json({
        success: true,
        results: results,
      });
    });
  }

  function get(req, res) {
    const query = {};
    if (req.query.categoryID) {
      query.categoryID = req.query.categoryID;
    }
    product.find(query, (err, products) => {
      if (err) {
        res.status(404);
        return res.send({
          success: false,
          error: err,
        });
      }
      res.status(200);
      return res.json({
        success: true,
        results: products,
      });
    });
  }


  return { post, get };
}

module.exports = productController;
