const express = require('express'); 
const produtoRoutes = require('./routes/produtoRoutes'); 
const cors = require('cors');


const app = express(); 
app.use(cors());
app.use(express.json()); 
app.use('/products', produtoRoutes);

module.exports = app;