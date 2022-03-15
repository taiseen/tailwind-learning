const Todo = ({ taskTitle: { title }, handelDelete }) => {

    return (
        <div className="bg-gray-200 rounded shadow p-4 grow basis-80 duration-300 hover:bg-gray-300">
            <h2 className="text-3xl pb-8 capitalize">{title}</h2>
            <div className="text-right">
                <button className="px-4 py-2 bg-red-300 rounded shadow text-xl 
                hover:bg-red-400 hover:text-white duration-300"
                    onClick={() => handelDelete(title)}
                >
                    Delete
                </button>
            </div>

        </div>
    );
}

export default Todo;