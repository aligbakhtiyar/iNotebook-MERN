import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  tag:{
    type: String,
    default: "General"
  },
  Date:{
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('user' , UserSchema);