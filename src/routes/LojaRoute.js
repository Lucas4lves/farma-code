const router = require("express").Router();
const controller = require("../controllers/LojaController");

router.post("/cadastrar", controller.cadastrar);

module.exports = router;