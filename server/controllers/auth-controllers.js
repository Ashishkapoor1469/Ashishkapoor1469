const User = require("../models/user-model"); // Importing User Model
const bcrypt = require("bcryptjs");

// home page

const home = async (req, res) => {
  try {
    res.status(200).send("Hello World kase ho router se");
  } catch (err) {
    console.log(err);
  }
};

//register page

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, fullname, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User Email Already Exist" });
    }

    //hashing password
    //    const salt = 10;
    //    const hashedPassword = await bcrypt.hash(password,salt);

    //
    const userCreated = await User.create({
      username,
      email,
      fullname,
      password,
    });
    res.status(201).json({
      msg: "resgistration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    // res.status(500).json("Internal Server Error");
    next(error);
  }
};

//login page

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExisted = await User.findOne({ email });
    console.log(userExisted);
    if (!userExisted) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExisted.password);
    const user = await userExisted.matchPassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successfull",
        token: await userExisted.generateToken(),
        userId: userExisted._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

///userlogic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData })
  } catch (error) {
    console.log("errror from user server", error);
  }
};

module.exports = { home, register, login, user }; // Exporting the router to use in server.js
