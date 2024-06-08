// StudentList.js

import React, { useState, useEffect } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch data from the server
        fetch('http://localhost:5000/readfromserver')
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>
                        {student.name} - {student.reg}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;