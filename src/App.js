import './App.css';
import { useState } from 'react';
import Input from './components/Inputs';
import View from './components/View';

function App() {
  //created state variables
  const [name, setName] = useState('(Enter Name)');
  const [age, setAge] = useState('(Enter Age)');
  const [hobbies, setHobbies] = useState('(Enter Hobby)');

  return (
    <div className="App">
      <Input 
        age={age}
        name={name}
        hobbies={hobbies}
        setName={setName}
        setAge={setAge}
        setHobbies={setHobbies}
        />
        <View 
          passedName={name}
          age={age}
          hobbies={hobbies}
          />
    </div>
  );
}

export default App;
