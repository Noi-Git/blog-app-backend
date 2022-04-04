const mongoose = require('mongoose')

//create schema object

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  profilePhoto: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  postCount: {
    type: Number,
    default: 0,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ['Admin', 'Guest', 'Blogger'],
  },
  isFollowing: {
    type: Boolean,
    default: false,
  },
  isUnFollowing: {
    type: Boolean,
    default: false,
  },
  isAccountVerifiend: { 
    type: Boolean, 
    default: false
  },
  accountVerificationToken: String,
  accountVerificationTokenExpires: Date,
  viewdBy: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
  },
  follower: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
  },
  following: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
  },
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: false,
  }
}, { // extra info for the schema
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
  timestamps: true,
});

// Compile the schema into medel
const User = mongoose.model('User', userSchema);

module.exports = User;