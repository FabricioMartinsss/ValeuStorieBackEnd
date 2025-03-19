# 📌 Estrutura do Projeto  

Este projeto segue uma arquitetura organizada para facilitar a manutenção e escalabilidade do código. Aqui estão alguns dos principais componentes e como você pode utilizá-los no seu próprio projeto:  

## 📁 Schema & Model  
No diretório `prisma/schema.prisma`, você encontra a definição das tabelas do banco de dados. O Prisma facilita a criação e manipulação do banco com um ORM eficiente. O modelo é definido com base nesse schema, permitindo a interação com os dados de forma simples.  

## 🏗 Controller  
Os controllers lidam com a lógica da aplicação e a interação entre as rotas e o banco de dados. Aqui, implementamos as operações CRUD para cada entidade.  

## 🚏 Router  
As rotas definem como as requisições são tratadas e encaminhadas. Utilizamos o Express para configurar endpoints claros e organizados.  

## 🔗 Como usar essas estruturas no seu código?  
Se você deseja replicar essa estrutura no seu projeto:  
1. **Defina seus modelos no Prisma (`schema.prisma`).**  
2. **Crie os controllers para manipular os dados do banco.**  
3. **Configure as rotas para expor a API de forma organizada.** 