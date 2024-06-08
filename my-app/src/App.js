import React from 'react';
import StudentRegistrationForm from './components/StudentForm/StudentForm';
import StudentList from './components/StudentList/StudentList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Registration</h1>
        <StudentRegistrationForm />
      </header>
      <div>
        <StudentList />
      </div>
    </div>
  );
}

export default App;