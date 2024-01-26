import express from 'express';
import ProductManager from './productManager.js';

const PORT = 3000;
const app = express();

const manager = new ProductManager('productData.json');

app.get('/products', (req, res) => {
    const limit = parseInt(req.query.limit);
    const products = manager.getProducts();

    if (!isNaN(limit)) {
        res.json(products.slice(0, limit));
    } else {
        res.json(products);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});