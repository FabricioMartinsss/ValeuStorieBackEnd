const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarProdutos = async () => {
    return prisma.produto.findMany(); 
};

const addProduto = async (name_product, price) => {
    return await prisma.produto.create({
        data: {
            name_product,
            price,
        },
    });
};

const atualizarProduto = async (id ,{name_product, price}) => {
    const produto = await prisma.produto.findUnique({
        where: {id},
    });
    if(!produto){
        throw new Error("Produto não encontrado")
    }
    return await prisma.produto.update({
        where: {id},
        data: {
            name_product,
            price,
        },
    });
}

const deletarProduto = async(id) => {
    try{
        const produtoDeletado = await prisma.produto.delete({
            where: {
                id: Number(id),
            },
        })
        console.log("Produto deletado com sucesso")
    } catch (error){
        console.error("erro ao deletar produto: ", error)
        throw error;
    }
}

module.exports = { listarProdutos, addProduto, atualizarProduto, deletarProduto};
