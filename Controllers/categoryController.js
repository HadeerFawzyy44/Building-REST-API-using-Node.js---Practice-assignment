function categoryController(category) {

function post(req, res) {
        const Category = new category(req.body);
        Category.save((err , results)=>{
          if(err){
            res.status(404)
            return res.send({
              success: false,
              error: err,
            });
          }
          res.status(201);
          return res.json(
              {
              success: true,
              results:Category
          });
        });
      
      }
  function get(req, res) {
    const query = {};
    if (req.query.Name) {
      query.Name = req.query.Name;
    }
    category.find(query, (err, categories) => {
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
        results:categories,
      });
    });
  }
  return {post ,get};
}

module.exports = categoryController;
