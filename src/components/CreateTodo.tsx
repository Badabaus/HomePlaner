import { useState } from 'react'

interface ICreateTodo {
    onAddTodo: (todoText: string) => void;
}

export default function CreateTodo({ onAddTodo }: ICreateTodo) {
    const [todoText, setTodoText] = useState("");

    const handleCreateTodo = () => {
        if (todoText.trim()) {
            onAddTodo(todoText);
            setTodoText("");
        }
    }

    return (
        <div className='flex justify-center shadow-md bg-slate-700'>
            <input
                className='p-2 m-2 rounded-md'
                type='text'
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder='Neue Todo hinzufügen'
                maxLength={35}
                required
            />
            <button className='p-2 m-2 text-white bg-blue-500 rounded-md' onClick={handleCreateTodo}>Erstellen</button>
        </div>
    )
}
