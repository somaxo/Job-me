// import mongoose from "mongoose";


// const JobSchema = new mongoose.Schema({
//   title: { type: String, required: true, trim: true },
//   company: { type: String, required: true, trim: true },
//   logoUrl: {type: String, required: true},
//   description: { type: String, required: true, trim: true },
//   employmentType: { type: String, required: true, trim: true },
//   location: { type: String, required: true, trim: true },
//   experience: { type: String, required: true, trim: true },
//   salary: { type: String, trim: true },
//   duties: { type: [String], trim: true },
//   skills: { type: [String], trim: true },
//   latitude: { type: Number, trim: true },
//   longitude: { type: Number, trim: true },
// }, {timeStamp: true});

// export default mongoose.models.Jobs || mongoose.model('Job', JobSchema)



import mongoose from "mongoose";

const { Schema } = mongoose;

const JobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  employmentType: { type: String, required: true },
  logoUrl: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: String, required: true },
  salary: { type: String },
  duties:  { type: [String] } ,
  skills: { type: [String]  },
  latitude: { type: Number },
  longitude: { type: Number },
  createdAt:{
    type: Date,
    default: Date.now
  }
},{timestamp: true});

export default mongoose.models.Job || mongoose.model("Job", JobSchema);

