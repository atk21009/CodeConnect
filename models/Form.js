const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  title: String,
  desc: String,
  user: String,
  createDate: String,
});

module.exports = mongoose.model("forms", formSchema);
