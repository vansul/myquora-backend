const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    mobile: String,
    dob: String,
    pwd: String,
    gender: String,
    country: String,
    isModerator: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.pwd);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('pwd')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.pwd = await bcrypt.hash(this.pwd, salt);
});

const User = model('users', userSchema);

module.exports = User;
