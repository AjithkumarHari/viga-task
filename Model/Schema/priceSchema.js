const { model, Schema, ObjectId} = require("mongoose");

const priceShcema = new Schema(
    {
        organization_id :{
            type : ObjectId,
            require : true,
            ref: 'ORGANISATION'
        },
        item_id :{
            type : ObjectId,
            require : true,
            ref: 'ITEM'
        },
        zone :{
            type : String,
            require : true,
        },
        base_distance_in_km :{
            type : Number,
            require : true,
        },
        km_price :{
            type : Number,
            require : true,
        },
        fix_price :{
            type : Number,
            require : true,
        },
    },
    { timestamps : true}
)

const PRICE = model("Price", priceShcema, "price");

module.exports =  PRICE;