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
  res.send("Masuk Halaman updateTodo");
}

function deleteTodo(req, res) {
  res.send("Masuk Halaman deleteTodo");
}

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
