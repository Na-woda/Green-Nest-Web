const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
<<<<<<< HEAD
    res.send("GreenNest Backend Running Successfully!");
=======
  res.send("GreenNest Backend Running Successfully!");
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
});

const PORT = process.env.PORT || 5000;

mongoose
<<<<<<< HEAD
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });
=======
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
