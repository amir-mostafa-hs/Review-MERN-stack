const mongoose = require("mongoose");
const ToDoSchema = require("../Schemas/todoSchema");

// get all user todo
const getAllUserTodo = async (req, res) => {
  const { userId } = req.body;

  try {
    const allTodoData = await ToDoSchema.find({ "assignedToUsers.userId": userId }).sort({ createAt: -1 });
    if (!allTodoData) {
      res.status(404).json({ error: "There is no such user with this userId" });
    } else {
      res.status(200).json(allTodoData);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get one user todo
const getOneUserTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "This id is not valid" });
  } else {
    try {
      const todoData = await ToDoSchema.findById(id);
      if (!todoData) {
        res.status(404).json({ error: "There is no such todo with this id" });
      } else {
        res.status(200).json(todoData);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// create new user todo
const createNewTodo = async (req, res) => {
  const { title, description, constructiveUsers, assignedToUsers, createDate, doneDate } = req.body;

  try {
    const todo = await ToDoSchema.create({ title, description, constructiveUsers, assignedToUsers, createDate, doneDate });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete one user todo
const deleteOneUserTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "This id is not valid" });
  } else {
    try {
      const deletedTodoData = await ToDoSchema.findByIdAndDelete(id);
      if (!deletedTodoData) {
        res.status(404).json({ error: "There is no such todo with this id" });
      } else {
        res.status(200).json(deletedTodoData);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

// update on user todo
const updateOneUserTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "This id is not valid" });
  } else {
    try {
      const updatedTodoData = await ToDoSchema.findByIdAndUpdate(id, { ...req.body });
      if (!updatedTodoData) {
        res.status(404).json({ error: "There is no such todo with this id" });
      } else {
        res.status(200).json(updatedTodoData);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = {
  createNewTodo,
  getAllUserTodo,
  getOneUserTodo,
  deleteOneUserTodo,
  updateOneUserTodo,
};
