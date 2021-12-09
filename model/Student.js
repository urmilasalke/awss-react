const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 255 },
  email: { type: String, required: true, unique: true, max: 255, min: 4 },
  class: { type: String, required: true },
  rollNo: { type: Number, required: true, unique: true },
  photoid: { type: String, required: true },
  password: { type: String, required: true, min: 6 },
  section: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  gender: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Student", studentSchema);
