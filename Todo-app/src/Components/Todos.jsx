export function Todos({todos}){
    if (!Array.isArray(todos) || todos.length === 0) return null; // Check if todos is an array and if empty, render nothing
    return <div >{todos.map((todo)=>{
        return(<div key={todo._id}>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button onClick={()=>{
            fetch('http://localhost:3000/completed',
                {
                    method:"PUT",
                    body:JSON.stringify({
                        id:todo._id
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            )
            console.log(todo.completed);
        }}>{(todo.completed)?"Completed":"Mark Done"}</button></div>)
    })}
    </div>
}