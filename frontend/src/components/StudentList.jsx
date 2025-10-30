import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/students");
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      fetchStudents();
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>📋 Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {s.name} ({s.email}) - {s.course}, Year {s.year}
            <button onClick={() => deleteStudent(s._id)} style={{ marginLeft: "10px" }}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
