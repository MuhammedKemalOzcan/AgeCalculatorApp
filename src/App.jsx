import { useState } from 'react';
import './App.css'
import Age from './components/Age'
import AgeShow from './components/AgeShow';

function App() {

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [isValid, setIsValid] = useState(0);

  return (
    <div className='form'>
      <Age day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear} isValid={isValid} setIsValid={setIsValid}/>
      <AgeShow day={day} month={month} year={year} isValid={isValid}/>
    </div>
  )
}

export default App
