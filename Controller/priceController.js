const { priceService } = require('../Service/priceService');

const getDeliveryCost = async (req,res)=>{
    try{
        const data = req.body;
        if(Object.entries(data).length!=4)
            res.status(400).send('Bad Request');
        const result = await priceService(data);
        res.send(result)
    }catch(error){
        console.log('controller error',error);
        res.status(500).send('Server Error')
    }
}

module.exports = {
    getDeliveryCost
};