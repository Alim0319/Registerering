/*const usersDB = {
  users: require("./users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fsPromises = require("fs").promises;
const path = require("path");

require("dotenv").config();
const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({ message: "Username and password required!" });

  const foundUser = usersDB.users.find((person) => person.username === user);
  if (!foundUser) return res.sendStatus(401);
  const match = await bcrypt.compare(pwd, foundUser.password);

  if (match) {
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "id" }
    );
    const otherUsers = usersDB.users.filter(
      (person) => person.username !== foundUser.username
    );
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    res.json({ accessToken });
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = { handleLogin };

/*const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  if (!user || !pwd)
    return res.status(400).json({ message: "Username and password required!" });

  const foundUser = usersDB.users.find((person) => person.username === user);

  if (!foundUser) return res.sendStatus(401);

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    res.json({ success: `User ${user} logged in` });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };*/

const usersDB = {
  users: require("./users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fsPromises = require("fs").promises;
const path = require("path");

require("dotenv").config();

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;

  // Sjekk om både brukernavn og passord er tilstede i forespørselen
  if (!user || !pwd) {
    return res.status(400).json({ message: "Username and password required!" });
  }

  // Finn brukeren med det spesifikke brukernavnet
  const foundUser = usersDB.users.find((person) => person.username === user);

  if (!foundUser) {
    // Brukeren ble ikke funnet, send 401 Unauthorized
    return res.sendStatus(401);
  }

  // Sammenlign passordet i forespørselen med brukerens lagrede passord ved hjelp av bcrypt
  const match = await bcrypt.compare(pwd, foundUser.password);

  if (match) {
    // Passordet er riktig, generer et tilgangstoken (access token) ved hjelp av JWT
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );

    // Oppdater refreshtoken i brukerens data i databasen for senere innlogging
    const otherUsers = usersDB.users.filter(
      (person) => person.username !== foundUser.username
    );
    const currentUser = { ...foundUser, refreshToken: "newRefreshToken" };
    usersDB.setUsers([...otherUsers, currentUser]);

    // Lagre den oppdaterte brukerlisten i en JSON-fil
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );

    // Returner tilgangstokenet som en respons
    return res.json({ accessToken });
  } else {
    // Passordet er feil, send 401 Unauthorized
    return res.sendStatus(401);
  }
};

module.exports = { handleLogin };
