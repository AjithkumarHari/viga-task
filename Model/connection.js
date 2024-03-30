const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`Database Connected Successfully`);
        
    }catch(error){
        process.exit(1);
    }
}

module.exports = connectDB;