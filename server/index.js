import mongoose from "mongoose";

export default async () => {
    if (mongoose.connections[0].readyState) return;
    const db = process.env.MONGO_DB ?? "mongodb://localhost:27017";

    await mongoose
        .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .catch((error) => {
            console.error("Database connection failed.");
            console.error(error);
            throw error;
        });
};
