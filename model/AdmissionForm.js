const mongoose = require("mongoose");
const admissionFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true, min: 3, max: 255 },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  admforstandard: { type: String, required: true },
  standardpass: { type: String, required: true },
  result: { type: Number, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
});
module.exports = mongoose.model("AdmissionForm", admissionFormSchema);
