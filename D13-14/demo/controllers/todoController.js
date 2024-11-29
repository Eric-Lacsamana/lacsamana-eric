const Todo = require('../models/todoModel');

const createTodo = async (req, res) => {
    try {
       const { title, description } = req.body;
        console.log('req.body', req.body);
       const todo =  new Todo({
            title,
            description,
        });

        await todo.save();

        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Server error'});
    }
}

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
}

const getTodoById = async (req, res) => {
    try {
       const { id } = req.params;
       const todo = await Todo.findById(id);
       if (!todo) {
          return res.status(404).json({ error: 'Todo not found' });
       }
       res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Server error'});
    }
}


const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = await Todo.findByIdAndUpdate(id, { title, description });
        console.log('todoo', todo);
        res.status(200).json(todo);
    } catch (error) {
           res.status(500).json({ error: 'Server error'});
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
  
        res.status(200).json({ message: 'Todo deleted sucessfully'});
    } catch (error) {
           res.status(500).json({ error: 'Server error'});
    }
}

module.exports = {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo
};