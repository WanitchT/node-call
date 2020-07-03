const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const User = require('./userModel');

const schema = new Schema({
  name: { type: String, required: true, trim: true },
  password: { type: String, trim: true },
  email: { type: String, default: 0 },
  phone: { type: String },
  address  : { type: String },
  profilePicture: { type: String }
}, {
  toJSON: {virtuals: true},
  timestamps: true,
  collection: 'user'
});
// createdDate: { type: Date, default: Date.now}, 

schema.virtual('comments', {
  ref: 'Comment', //ลิงก์ไปที่โมเดล Comment
  localField: '_id', //_id ฟิลด์ของโมเดล Post (ไฟล์นี้)
  foreignField: 'post' //post ฟิลด์ของโมเดล Comment (fk)
});

const user = mongoose.model('User', schema);

module.exports = user;