const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: [true, "Username already exists"],
    },
    Email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "Email already exists"],
    },
    Password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    Phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    Cnic: {
      type: String,
      required: [true, "Please provide a CNIC"],
    },
    Dob: {
      type: Date,
      required: [true, "Please provide a date of birth"],
    },
    Gender: {
      type: String,
      required: [true, "Please provide Gender"],
    },
    IPFSUrl: {
      type: String,
      required: [true, "Please provide IPFS Url"],
    },
    isVerified: { 
      type: Boolean, default: false 
    },
    verificationToken: { 
      type: String 
    },
    resetToken: { 
      type: String 
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
