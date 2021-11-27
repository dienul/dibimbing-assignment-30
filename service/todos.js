const modelTodo = require("../models/todos.json");

function getTodo(req, res) {
  res.send(modelTodo.rows);
}

function createTodo(req, res) {
  const { text, done } = req.body;
  const id = Math.floor(Math.random() * 100);
  modelTodo.rows.push({
    id: id,
    text: text,
    done: done,
  });
  res.send({
    id: id,
    success: true,
  });
}

function updateTodo(req, res) {
  const { id } = req.params;
  const { text, done } = req.body;
  const validText = "text" in req.body;
  const validDone = "done" in req.body;
  const index = modelTodo.rows.findIndex((x) => x.id === parseInt(id));
  if (!validText && !validDone) {
    res.send("Update harus mengisi Text atau Done");
  }

  if (validText) {
    modelTodo.rows[index].text = text;
  }

  if (validDone) {
    modelTodo.rows[index].done = done;
  }

  res.send({
    id: id,
    status: "updated",
    data: modelTodo.rows[index],
  });
}

function deleteTodo(req, res) {
  const { id } = req.params;
  const index = modelTodo.rows.findIndex((x) => x.id === parseInt(id));
  modelTodo.rows.splice(index, 1);

  res.send({
    id: id,
    status : "deleted",
  });
}

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
