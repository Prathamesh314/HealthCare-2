import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

export const connect_db = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URI ?? " ",{
            dbName: "work-manager"
        });
    
        console.log(connection);
        console.log("Connection established...");
    } catch (error) {
        console.log("Error has occured..");
        console.log(error);
        
    }   
}
