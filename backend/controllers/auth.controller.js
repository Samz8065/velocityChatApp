import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/loginToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password != confirmPassword) {
      return res
        .status(400)
        .json({ error: "Password and confirm password do not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ error: "username already exists, please pick another" });
    }

    //hashing pw so users are secure in case db is exposed
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //renders new random profilepic based on username
    const girlPfp = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const boyPfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyPfp : girlPfp,
    });

    if (newUser) {
      //generate jwt token for login info
      generateToken(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    generateToken(user._id, res);

    res.status(201).json({
      _id: user.id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal server error" });
  }
};
