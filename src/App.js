import logo from './logo.svg';
import './App.css';
import EditBtn from './components/EditBtn';
import Personal from './components/Personal';
import Education from './components/Education';
import AddEdu from './components/AddEdu';
import React, {useState} from 'react';

function App() {
  const [educations, setEducations] = useState([]);
  function addEdu(newSchool, newMajor, newDegree){
    let newEdu = {
      school: newSchool,
      major: newMajor,
      degree: newDegree
    }
    setEducations([...educations, newEdu]);
  }
  return (
    <div className="App">
      <h1>CV</h1>
      <h2>Personal Info</h2>
      <Personal />
      <h2>Education</h2>
      <AddEdu onAddEducation={addEdu}/>
      {educations.map(edu => <Education data={edu}/>)}
    </div>
  );
}

export default App;
