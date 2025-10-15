import React, { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const dummyTasks = {
    pagi: { isi: "Sarapan, Mandi, Mencuci", waktu: "06:00 - 07:00", status: "Penting" },
    siang: { isi: "Mengerjakan tugas", waktu: "13:00 - 17:00", status: "Penting" },
    malam: { isi: "Bermain, Menonton", waktu: "20:00 - 22:00", status: "Biasa" },
  };

  const [task, setTask] = useState(null);

  const changeTask = (time) => {
    setTask(dummyTasks[time]);
  };

  return (
    <TaskContext.Provider value={{ task, changeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
