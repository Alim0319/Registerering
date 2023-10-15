require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CustomerModel = require("./server/models/Customer");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

//homebrew middlewarews import
const connectDB = require("./server/config/dbConn");
//const { Console } = require("console");

//DBConnection
connectDB();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  /*CustomerModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});
app.post("/register", (req, res) => {
  CustomerModel.create(req.body)
    .then((Customeres) => res.json(Customeres))
    .catch((err) => res.json(err));
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(3500, () => console.log(`Server running on port ${PORT}`));
});*/

  try {
    const user = await CustomerModel.findOne({ email: email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        return res.json({ message: "Login successful" });
      } else {
        return res.status(401).json({ error: "Invalid password" });
      }
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const customer = await CustomerModel.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
const PORT = process.env.PORT || 3500;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
