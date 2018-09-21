module.exports = {
    getInventory(req,res){
        let db= req.app.get('db');
        db.get_inventory().then(items => {
            console.log(items);
            return res.status(200).json(items);
        }) 
    },
    addProduct(req,res,next){
        console.log(req.body);
        const {name, price, img} = req.body;
        let db = req.app.get('db')

        db.create_product([name, price, img]).then(items => {
            // console.log(items);
            return res.status(200).json(items);
        })
    }
    
}