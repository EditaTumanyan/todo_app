import { useState, useEffect } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";


export default function Todo(){

    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(storedTodos);
  
    const completedTodos = todos.filter((todo) => todo.done).length;
    const totalTodos = todos.length;
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  

    return( 
    <div > 
     <Form  todos={todos} setTodos={setTodos} />
     <TodoList todos={todos}  setTodos={setTodos} />
     <Footer  completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
    )
}