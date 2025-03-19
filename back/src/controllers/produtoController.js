const Produto = require("../models/produtoModel");

exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await Produto.listarProdutos();
        res.json(produtos);
    } catch (error) {
        console.error("Deu erro", error);
        res.status(500).json({ error: error.message || "Erro ao listar produtos" });
    }
};

exports.addProduto = async (req, res) => {
    const {name_product, price} = req.body
    try {
        if (!name_product || !price) {
            return res.status(400).json({ error: 'Nome do Produto e preço  são obrigatórios' });
          }
        const novoProduto = await Produto.addProduto(name_product, price);
        res.status(201).json(novoProduto);
    } catch(error){
        console.error(' ERRO AO ADICIONAR:', error);
        res.status(500).json({ error: "Deu ruim"});
    }
};

exports.atualizarProduto = async (req, res) => {
    try{
        const {id} = req.params;
        const {name_product, price} = req.body;
        if (!name_product || !price) {
            return res.status(400).json({ error: 'Nome do Produto e preço  são obrigatórios' });
          }
          const produtoAtualizado = await Produto.atualizarProduto(Number(id), {
            name_product,
            price: Number(price),
          });
        res.status(201).json(produtoAtualizado);
    } catch(error){
        console.error(' ERRO AO ATUALIZAR:', error);
        res.status(500).json({ error: "Deu ruim"});
    }
}

exports.deletarProduto = async (req, res) => {
    try{
        const {id} = req.params;
        await Produto.deletarProduto(parseInt(id));
        res.status(200).json({message: "Produto deletado"})
    } catch(error){
        console.error("Erro ao deletar viu");
        res.status(404).json({ error: "Erro"})
    }
}