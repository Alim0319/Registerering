const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ mesage: "Username and password are required!" });
  const duplicate = usersDB.users.find((person) => person.username === user);
  if (duplicate) return res.sendStatus(409);
  try {
    const hashetPwd = await bcrypt.hash(pwd, 10);
    const newUser = { username: user, password: hashetPwd };

    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "", "models", "users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.mesage });
  }
};

module.exports = { handleNewUser };

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
