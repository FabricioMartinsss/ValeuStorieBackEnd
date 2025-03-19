const Produto = require("../controllers/produtoController");
const express = require("express");
const router = express.Router();

router.get("/", Produto.listarProdutos); 
router.post("/", Produto.addProduto);
router.put("/:id", Produto.atualizarProduto);
router.delete("/:id", Produto.deletarProduto);

module.exports = router;
