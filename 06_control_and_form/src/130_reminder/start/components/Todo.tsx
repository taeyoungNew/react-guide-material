import { useState } from "react";

import ListCom from "./ListCom";
import FormCom from "./FormCom";
const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const  [ todos, setTodos ] = useState(todosList)

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    console.log("newTodos = ", newTodos);
    
    setTodos(newTodos)
  }

  type todoType = {
      id: number,
      content: string
  }

  const createTodo = (todo: todoType): void => {
    console.log("todo = ", todo);
    
    setTodos([...todos, todo]);
  }

  return (
    <>
      <ListCom todos={todos} deleteTodo={deleteTodo}></ListCom>
      <FormCom createTodo={createTodo} ></FormCom>
    </>
  )

};


export default Todo