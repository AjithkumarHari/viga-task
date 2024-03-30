const { model, Schema} = require("mongoose");

const itemShcema = new Schema(
    {
        type :{
            type : String,
            require : true,
        },
        description :{
            type : String,
            require : true,
        },
    },
    { timestamps : true}
)

const ITEM = model("Item", itemShcema, "item");

module.exports =  ITEM;