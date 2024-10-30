const express = require('express')
const jwt = require('jsonwebtoken');
const { createTodos, updateTodos } = require('./input');

const app = express();

app.use(express.json());

app.get('/todos',(req,res)=>{
    
})

app.post('/createTodos',(req,res)=>{
    let todos = req.body;
    let isSafe = createTodos.safeParse(todos);
    if(!isSafe.success){
        res.status(403).json({
            msg:"Wrong input"
        })
        return;
    }
    //put in mongodb
})

app.put('/completed',(req,res)=>{
    let updatetodos = req.body;
    let isSafe = updateTodos.safeParse(updatetodos);
    if(!isSafe.success){
        res.status(403).json({
            msg:"Wrong input"
        })
        return;
    }
    
})