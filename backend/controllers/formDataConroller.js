const User = require("../model/FormData");

// Add a new user
exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User added successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
