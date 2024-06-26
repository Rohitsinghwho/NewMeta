import mongoose from 'mongoose'

const ConnectDb=async ()=>{
    try {
        const Mongoconnection= await mongoose.connect(`${process.env.MONGO_URI}/NewMetaDb`);
        console.log("Connected to MongoDB ", Mongoconnection.connection.host);
    } catch (error) {
        console.log("Unable to Connect to MONGODB! ",error)
    }
}

export default ConnectDb;