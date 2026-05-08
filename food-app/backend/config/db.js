import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://foodapp:12344321@cluster0.ljd81wg.mongodb.net/food-del",
    )
    .then(() => {
      console.log("DB Connected");
    });
};
