const PRICE = require('../Model/Schema/priceSchema')

const priceService = async (priceData) => {
    try{
        const { zone, organization_id, total_distance, item_type } = priceData;
        const { base_distance_in_km, fix_price, km_price }  = await PRICE.findOne({organization_id,zone});
        let total_price = fix_price;
        if( total_distance>base_distance_in_km ){
            const extra_distance = total_distance-base_distance_in_km;
            if(item_type === 'perishable'){
                total_price = total_price+extra_distance*km_price;
            }else{
                total_price = total_price+extra_distance;
            }
        }
        return { total_price };
    }catch(error){
        console.log('service error',error);
    }
}

module.exports = { priceService };