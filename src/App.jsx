import { useState } from 'react';
import './App.css'
import Age from './components/Age'
import AgeShow from './components/AgeShow';

function App() {

  const [date, setDate] = useState({ day: "", month: "" , year: "" });
  const [error, setError] = useState("");

  //Durum değişikliğinde veriyi güncellemek için bir fonksiyon
  const handleDateChange = (field, value) => {
    setDate((prevDetails) => ({ ...prevDetails, [field]: value }));
  }

  return (
    <div className='form'>
      <Age date={date} setDate={handleDateChange} error={error} setError={setError} />
      <AgeShow date={date} error={error} />
    </div>
  )
}

export default App
