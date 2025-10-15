import React from "react";
import { useTask } from "../hooks/useTask";

const TaskDisplay = () => {
  const { task, changeTask } = useTask();

  return (
    <div className="p-4 bg-white rounded shadow-md">
      {task ? (
        <div>
          <p className="mb-1 font-semibold">Isi Task: {task.isi}</p>
          <p className="mb-1">Waktu: {task.waktu}</p>
          <p className="mb-2">Status: {task.status}</p>
        </div>
      ) : (
        <p className="text-gray-500 mb-2">Cek task harian</p>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => changeTask("pagi")}
          className="px-3 py-1 bg-yellow-400 rounded"
        >
          Pagi
        </button>
        <button
          onClick={() => changeTask("siang")}
          className="px-3 py-1 bg-orange-400 rounded"
        >
          Siang
        </button>
        <button
          onClick={() => changeTask("malam")}
          className="px-3 py-1 bg-purple-500 text-white rounded"
        >
          Malam
        </button>
      </div>
    </div>
  );
};

export default TaskDisplay;
