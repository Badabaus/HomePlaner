interface FilterProps {
    onFilterChange: (filter: 'all' | 'completed' | 'incompleted') => void;
    filteredOption: 'all' | 'completed' | 'incompleted';
}

export default function Search({ onFilterChange, filteredOption }: FilterProps) {
    return (

        <div className='flex items-center justify-center m-2 text-white'>

            <span
                className={`p-1 px-2 bg-slate-600 rounded-lg  cursor-pointer ${filteredOption === "all" ? "bg-slate-600" : "bg-white text-black"}`}
                onClick={() => onFilterChange("all")}
            >
                Alle
            </span>
            <span
                className={`p-1 px-2 bg-slate-600 rounded-lg  cursor-pointer ${filteredOption === "completed" ? "bg-slate-600" : "bg-white text-black"}`}
                onClick={() => onFilterChange("completed")}
            >
                Erledigt
            </span>
            <span
                className={`p-1 px-2  rounded-lg  cursor-pointer ${filteredOption === "incompleted" ? "bg-slate-600" : "bg-white text-black"}`}
                onClick={() => onFilterChange("incompleted")}
            >
                Offen
            </span>
        </div>
    )
}
