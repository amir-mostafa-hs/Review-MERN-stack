const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  name: { type: String, require: true },
  userId: { type: String, require: true },
  userRole: { type: String, require: true },
});

const ToDoSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      length: { min: "5", max: "200" },
    },
    description: {
      type: String,
      require: true,
      length: { min: "5", max: "1000" },
    },
    constructiveUsers: {
      type: User,
      require: true,
    },
    assignedToUsers: {
      type: User,
      require: true,
    },
    createDate: {
      type: Date,
      require: true,
    },
    doneDate: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToDoModel", ToDoSchema);
