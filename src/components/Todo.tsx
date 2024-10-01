import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";


interface ITodo {
    text: string;
    isCompleted: boolean;
    onIsCompleted: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export default function Todo({ text, isCompleted, onIsCompleted, onEdit, onDelete }: ITodo) {
    return (
        <div className='flex items-center justify-between p-2 todo-item odd:bg-slate-200 darkmode:text-white hover:bg-slate-100'>
            <span
                onClick={onIsCompleted}
                className={`${isCompleted ? "line-through" : ""} hover:cursor-pointer w-full`}
            >{text}</span>
            <div className='flex gap-1 text-white'>
                <button
                    className='p-2 bg-yellow-400 rounded-md shadow-md'
                    onClick={onEdit}><RiEdit2Line />
                </button>
                <button
                    className='p-2 bg-red-500 rounded-md shadow-md'
                    onClick={onDelete}><RiDeleteBin5Line /></button>
            </div>
        </div>
    )
}
