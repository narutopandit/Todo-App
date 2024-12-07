import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDes] = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={(t)=>{
            setTitle(t.target.value);
        }} /> <br></br><br></br>
        <input type="text" placeholder="description" onChange={(t)=>{
            setDes(t.target.value);
        }} /><br></br><br></br>
        <button onClick={()=>{
            fetch('http://localhost:3000/createTodo',{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
        }}>Add todo</button>
    </div>
}