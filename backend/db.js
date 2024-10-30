const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://narutopandit220:IURGKbYlxoKOHQmt@cluster0.du5zhdq.mongodb.net/todos',{ dbName: "Todos" })
const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

 let todo = mongoose.model('todos',TodoSchema);
 
 module.exports={
    todo
 }