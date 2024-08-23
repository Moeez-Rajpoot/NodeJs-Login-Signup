const moongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const ConnectDb = async () => {
    try {

        const connect = await moongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected successfully" , connect.connection.name);
        
    } catch (error) {
        console.log("Error in connecting to database", error);
        
    }

}

module.exports = {ConnectDb};