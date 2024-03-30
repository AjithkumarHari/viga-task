const { model, Schema} = require("mongoose");

const orgShcema = new Schema(
    {
        name :{
            type : String,
            require : true,
        },
    },
    { timestamps : true}
)

const ORGANISATION = model("Organisation", orgShcema, "organisation");

module.exports =  ORGANISATION;