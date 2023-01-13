import dotenv from 'dotenv';
dotenv.config()
import mongoose, { mongo } from "mongoose";


const connection = () => {

    mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    })

    mongoose.connection.on("error", () => {
        console.log("Error white connecting with Database", error.message);
    })
}

export default connection;