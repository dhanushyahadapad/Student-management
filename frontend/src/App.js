import React from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div style={{ margin: "30px" }}>
      <h1>🎓 Student Management System</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}

export default App;
