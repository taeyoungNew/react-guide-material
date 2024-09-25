import { useState } from "react"


type createTodoType = {
	createTodo: Function
}

const FormCom = ({ createTodo }: createTodoType) => { 
    const [ enteredTodo, setEnterTodo ] = useState("")
		
    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo
        }

				console.log(newTodo);
				
				createTodo(newTodo)

    }
    return (
        <div>
					<form onSubmit={addTodo}>
            <input 
                type="text" 
                value={enteredTodo} 
                onChange={(e) => setEnterTodo(e.target.value)} 
            />
            <button>추가</button>
					</form>
					<span>{enteredTodo}</span>
        </div>
    )
}

export default FormCom