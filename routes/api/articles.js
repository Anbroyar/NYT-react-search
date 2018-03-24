const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route('/')
    .get(articlesController.findAll)
    .post(articlesController.save);

router.route('/:id')
    .get(articlesController.findById)
    .delete(articlesController.remove);

module.exports = router;