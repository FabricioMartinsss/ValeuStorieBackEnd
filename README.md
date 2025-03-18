# 📌 Estrutura do Projeto  

Este projeto segue uma arquitetura organizada para facilitar a manutenção e escalabilidade do código. Aqui estão alguns dos principais componentes e como você pode utilizá-los no seu próprio projeto:  

## 🛢️ Prisma (Schema)  
No diretório `prisma/schema.prisma`, você encontra a definição das tabelas do banco de dados. O Prisma facilita a criação e manipulação do banco com um ORM eficiente.  

## 📁 Models  
Os models ficam dentro do diretório `src/models` e são responsáveis por estruturar a interação com os dados. Eles representam as entidades do sistema e ajudam a organizar a lógica da aplicação.  

## 🏗 Controller  
Os controllers lidam com a lógica da aplicação e a interação entre as rotas e o banco de dados. Aqui, implementamos as operações CRUD para cada entidade.  

## 🚏 Router  
As rotas definem como as requisições são tratadas e encaminhadas. Utilizamos o Express para configurar endpoints claros e organizados.  

## 🎨 Front-end  
Agora o projeto conta com um front-end integrado, permitindo a interação direta com a API. O front consome os endpoints da aplicação e proporciona uma interface amigável para o usuário.  

## 🔗 Como usar essas estruturas no seu código?  
Se você deseja replicar essa estrutura no seu projeto:  
1. **Defina seus modelos no Prisma (`prisma/schema.prisma`).**  
2. **Crie os models dentro de `src/models` para estruturar os dados.**  
3. **Implemente os controllers para manipular as regras de negócio.**  
4. **Configure as rotas para expor a API de forma organizada.**  
5. **Desenvolva o front-end para consumir os endpoints da API.**  

Dessa forma, seu projeto se mantém modular e fácil de expandir! 🚀  
