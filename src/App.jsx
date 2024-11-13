import { useState } from 'react';
import './App.css'
import Age from './components/Age'

function App() {

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  return (
    <div className='app'>
      <Age day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear} />
    </div>
  )
}

export default App
