const PRICE = require('../Model/Schema/priceSchema')

const priceService = async (priceData) => {
    try {
      const { zone, organization_id, total_distance, item_type } = priceData;
      const { base_distance_in_km, fix_price, km_price } = await PRICE.findOne({ organization_id, zone });
  
      const extraDistance = Math.max(0, total_distance - base_distance_in_km);
      const totalPrice = fix_price + (item_type === 'perishable' ? extraDistance * km_price : extraDistance);
  
      return { totalPrice };
    } catch (error) {
      console.error('service error:', error);
    }
};
  

module.exports = { priceService };