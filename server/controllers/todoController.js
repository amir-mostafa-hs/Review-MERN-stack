const ToDoSchema = require("../Schemas/todoSchema");

// get all user todo
const getAllUserTodo = async (req, res) => {
  const { userId } = req.body;

  try {
    const allTodoData = await ToDoSchema.find({ "assignedToUsers.userId": userId }).sort({ createAt: -1 });
    res.status(200).json(allTodoData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get one user todo

// create new user todo
const createNewTodo = async (req, res) => {
  const { title, description, constructiveUsers, assignedToUsers, createDate, doneDate } = req.body;
  const newTodoData = { title, description, constructiveUsers, assignedToUsers, createDate, doneDate };

  try {
    const todo = await ToDoSchema.create(newTodoData);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete one user todo

// update on user todo

module.exports = {
  createNewTodo,
  getAllUserTodo,
};
