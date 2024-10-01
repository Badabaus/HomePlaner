import { useCallback, useEffect, useState } from 'react'
import Todo from './Todo';
import Search from './Search';
import CreateTodo from './CreateTodo';

interface ITodo {
    id: number;
    text: string;
    isCompleted: boolean;
    createAt: Date;
    editAt: Date;
}

export default function Todos() {
    const [todos, setTodos] = useState<ITodo[]>(
        localStorage.getItem("todos") ?
            JSON.parse(localStorage.getItem("todos")!) : []);
    const [filteredOption, setFilteredOption] = useState<'all' | 'completed' | 'incompleted'>('all')

    const sortedTodos = [...todos].sort((a, b) => {
        if (a.isCompleted !== b.isCompleted) {
            return Number(a.isCompleted) - Number(b.isCompleted);
        }

        return 0;
    });

    const filteredTodos = sortedTodos.filter(todo => {
        if (filteredOption === 'completed') {
            return todo.isCompleted;
        } else if (filteredOption === "incompleted") {
            return !todo.isCompleted;
        }

        return true;
    });

    const handleFilteredChange = (filter: 'all' | 'completed' | 'incompleted') => {
        setFilteredOption(filter);
    }

    const handleAddTodo = (todoText: string) => {
        const storedTodos = localStorage.getItem("todos");
        const todos: ITodo[] = storedTodos ? JSON.parse(storedTodos) : [];

        const idNr = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1;
        const newTodo: ITodo = {
            id: idNr,
            text: todoText,
            isCompleted: false,
            createAt: new Date(),
            editAt: new Date()
        };

        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos, newTodo];
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            return updatedTodos;
        })
    }

    const handleOnEdit = useCallback((id: number) => {
        const findIndex = todos.findIndex(todo => todo.id === id);
        console.log(findIndex);

    }, []);

    const handeOnDelete = useCallback((id: number) => {
        const updatedTodos = [...todos];
        // find Index in array
        const findIndex = todos.findIndex(todo => todo.id === id);

        if (findIndex !== -1) updatedTodos.splice(findIndex, 1);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleIsCompleted = useCallback((id: number) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        )
    }, []);

    useEffect(() => {
        JSON.parse(localStorage.getItem("todos")!);
    }, [todos])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <CreateTodo onAddTodo={handleAddTodo} />
            <Search onFilterChange={handleFilteredChange} filteredOption={filteredOption} />
            {filteredTodos.length !== 0 ? filteredTodos.map(todo => (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    isCompleted={todo.isCompleted}
                    onIsCompleted={() => handleIsCompleted(todo.id)}
                    onEdit={() => handleOnEdit(todo.id)}
                    onDelete={() => handeOnDelete(todo.id)}
                />
            )) : <p className='flex justify-center'>Keine {filteredOption === 'all' ? "" : filteredOption} Todos</p>}
        </div>
    )
}
