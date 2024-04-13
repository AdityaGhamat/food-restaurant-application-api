import mongoose from "mongoose";

export const connectionDb = () => {
  mongoose
    .connect(process.env.db_link, {
      dbName: "Restaurant_application",
    })
    .then((c) => console.log(`database connected to ${c.connection.host}`))
    .catch((error) => console.log(error));
};
