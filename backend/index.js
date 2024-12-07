const express = require('express')
const jwt = require('jsonwebtoken');
const { createTodos, updateTodos } = require('./input');
const {todo} = require('./db');
const { urlencoded } = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/todos',async (req,res)=>{
     const todos = await todo.find();
     
     res.json({
        todos
     })
})

app.post('/createTodo',async (req,res)=>{
    let todos = req.body;
    let isSafe = createTodos.safeParse(todos);
    if(!isSafe.success){
        res.status(403).json({
            msg:"Wrong input"
        })
        return;
    }
    //put in mongodb
  try {await todo.create({
        title:todos.title,
        description: todos.description,
        completed: false
    });
    res.status(200).json({msg:"todo created"})
}
    catch{
        res.status(404).json({msg:"server error"})
    }
}
)


app.put('/completed',async (req,res)=>{
    let updatetodos = req.body;
    let isSafe = updateTodos.safeParse(updatetodos);
    if(!isSafe.success){
        res.status(403).json({
            msg:"Wrong input"
        })
        return; 
    }
    await todo.findByIdAndUpdate(req.body.id, { 
        completed: true 
    });
    res.send('updated!!');
})

app.listen(3000,()=>{
    console.log('server is running',3000);
})