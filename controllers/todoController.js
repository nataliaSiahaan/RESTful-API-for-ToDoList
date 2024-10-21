const { Todo } = require('../models');

// Membuat todo baru
exports.createTodo = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const todo = await Todo.create({ title, description, status, UserId: req.user.id });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Melihat semua todo
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ where: { UserId: req.user.id } });
    res.json(todos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Melihat Todo berdasarkan ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mengubah todo
exports.updateTodo = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.status = status === undefined ? todo.status : status;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//hapus Todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo tidak ditemukan' });

    await todo.destroy();
    res.json({ message: 'Todo berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Menghapus semua todo
exports.deleteAllTodos = async (req, res) => {
  try {
    await Todo.destroy({ where: { UserId: req.user.id } });
    res.json({ message: 'Seluruh todo berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
