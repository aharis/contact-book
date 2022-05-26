import mongoose from "mongoose";

const connDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/conects",
                {
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        console.log({ error: "Something wrong with connDB!" })
        console.log(`Error: ${error.message}`);
        process.exit(1);//check what is this
    }
}
export default connDB;