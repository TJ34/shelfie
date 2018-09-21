require('dotenv').config()

const express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3001,
    massive = require('massive');
let controller = require('./controller');

    const app = express();
    app.use(bodyParser.json());
    massive(process.env.CONNECTION_STRING).then(dbInstance => {
        return app.set('db', dbInstance)
    }).catch(err => console.log(err));


    app.get('/api/inventory', controller.getInventory);
    app.post('/api/product', controller.addProduct);


app.listen(port, () => console.log(`Sim1 is underway on ${port}.`))
