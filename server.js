const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

app.get("/", (req, res) => res.json({ msg: "Welcome" }));

/* connetct db */

connectDB();

/* init middleware */
app.use(express.json({ extended: false }));

/* define routes */

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
