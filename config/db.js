const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  /// How it would look like whithout async
  // mongoose
  //   .connect(db, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //   })
  //   .then(() => {
  //     console.log("Connected");
  //   })
  //   .catch((err) => {
  //     console.error(err.message);
  //     process.exit(1);
  //   });
};

module.exports = connectDB;
