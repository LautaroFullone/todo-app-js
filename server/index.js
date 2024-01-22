const express = require("express");
const cors = require("cors");
const allTodos  = require("./mock");
const { v4 } = require("uuid")

const PORT = 3030;
const app = express();

app.use(express.json());
app.use(cors());

let todos = allTodos

app.get('/tasks-history', (req, res) => {
    res.json(todos);
});

app.post('/todo', (req, res) => {

    console.log(req.body)
    const newTodo = {
        id: v4(),
        label: req.body.label,
        isCompleted: false
    };
    todos.unshift(newTodo);
    res.status(201).json(todos);
});

app.listen(PORT, () => {
    console.log('# Server listening on port ', PORT);
})