const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema(
  {
    patientId: String,
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    age: Number,
    location: Object,
    temperature: Number,
    picturePath: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;
