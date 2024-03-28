import mongoose from "mongoose";

const todoschema = new mongoose.Schema9(
  {
    titile: {
      type: String,
      require: [true, "todo item must be required"],
    },
  },
  {
    timestamps: true,
  }
);

const TodoItem = mongoose.model("TodoItem", todoschema);

module.exports = TodoItem;
