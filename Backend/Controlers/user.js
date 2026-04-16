const User = require("../Models/user");
const { createHmac } = require('node:crypto');

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log({ username, email, password });

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const newUser = new User({ username, email, password });
    
    await newUser.save();

    res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required" });
//   }

//   try {
//     const user = await User.findOne({ email, password });
//     if (!user) return res.status(401).json({ message: "Invalid email or password" });

//     res.status(200).json({ message: "Login successful" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const hashedInputPassword = createHmac("sha256", user.salt)
      .update(password)
      .digest("hex");

    if (hashedInputPassword !== user.password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful" ,
      username: user.username
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
