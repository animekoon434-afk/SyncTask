import mongoose from 'mongoose';

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDb connected Successfully');
    }
    catch(err){
        console.error('Error connecting to MongoDB:', err.message);
    }
}

export default connectDb;
