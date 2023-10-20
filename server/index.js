require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const fsPromises = require("fs").promises;
const corsOptions = require("./config/corsOptions");
const CustomerModel = require("./models/Customer");
const bcrypt = require("bcrypt");
const envRouter = require("./routes/apiRouter");
const { logger } = require("./middleware/logEvent");
const errorHandler = require("./middleware/errorHandler");

//Middleware

//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(
  express.static(path.join(__dirname, "../register/public", "index.html"))
);
//app.use(logger);
//app.use(errorHandler);
app.use(cors(corsOptions));
app.use("/env", envRouter);

//Routes

//app.use("/subdir", require("./routes/subdir"));
//app.use("/", require("./routes/root"));
app.use("/Customers", require("./routes/Customers"));
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));

//homebrew middlewarews import
const connectDB = require("./config/dbConn");
const router = require("./routes/apiRouter");
//const { Console } = require("console");

//DBConnection
connectDB();
const htmlFilePath = path.join(__dirname, "../Register/index.html");

app.get("*", (req, res) => {
  // Her kan du sende en velkomstmelding eller laste inn en HTML-fil, avhengig av hva du vil vise på rotkatalogen.
  //res.sendFile(path.join(registerPath, "index.html"));
  //res.send("Velkommen til serveren!");
  res.sendFile(htmlFilePath);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await CustomerModel.findOne({ email: email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(
        password,
        user.user.password
      );
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
