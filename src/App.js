import { useRef, useState } from "react";
import Modal from "./Modal";
import Todo from "./Todo";

function App() {

  const todo = [
    { title: "learning" },
    { title: "sleeping" },
    { title: "codding" },
    { title: "drinking" },
    { title: "walking" },
    { title: "running" },
  ];

  const [tasks, setTasks] = useState(todo);
  const [isClose, setIsClose] = useState(false);
  const titleRef = useRef();


  const handelDelete = (title) => {
    setIsClose(!isClose);
    titleRef.current = title;
  }


  const modal = (value) => {
    if (value) {
      setTasks(tasks.filter(t => t.title !== titleRef.current));
      setIsClose(!isClose);
    } else {
      setIsClose(!isClose);
    }
  }


  return (
    <div className="p-4 md:p-8">

      <h1 className="text-3xl md:text-4xl p-4 mb-6 rounded shadow text-center bg-gray-100">Demo Todo List</h1>

      <div className="flex gap-4 flex-wrap">
        {
          tasks.map((task, i) => (
            <Todo key={i} taskTitle={task} handelDelete={handelDelete} />
          ))
        }
      </div>

      {
        isClose && <Modal modal={modal} />
      }
    </div>
  );
}

export default App;
