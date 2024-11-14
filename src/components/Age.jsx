import React, { useState } from 'react'
import "../app.css"
import button from "../assets/arrow.png"

function Age({ date, setDate, error, setError }) {

  //burada tanımladığımız day,month ve year değişkenlerini date içerisindekilerle kopyalıyoruz.
  const { day, month, year } = date;
  console.log(day)
  console.log(month)
  console.log(year)

  const validateDate = () => {
    if (day > 31 || day <= 0) return "Must be a valid day";
    if (month > 12 || month <= 0) return "Must be a valid month";
    if (year > new Date().getFullYear() || year <= 0) return "Must be a valid year";
    return "";
  }

  console.log(date);
  console.log(error);

  const handleSubmit = ((e) => {
    e.preventDefault();
    const errorMessage = validateDate();
    setError(errorMessage);

  })



  return (
    <div className='flex flex-col border-b-2'>
      <form className='flex gap-12 h-1/4' onSubmit={handleSubmit}>
        <label className='flex flex-col'>
          <span className={error.includes("day") ? "text-red-500" : ""} >Day</span>
          <input
            value={day}
            onChange={(e) => setDate("day", e.target.value)}
            type="text"
            className={`w-24 h-10 p-4 border rounded ${error.includes('day') ? 'border-red-500' : 'border-gray'} outline-none focus:border-purple-800`} />
          {error.includes("day") && <span className='text-[10px] text-red-500' >{error}</span>}
        </label>

        <label className='flex flex-col'>
          <span className={error.includes("month") ? "text-red-500" : ""} >Month</span>
          <input
            value={month}
            onChange={(e) => setDate("month", e.target.value)}
            type="text"
            className={`w-24 h-10 p-4 border rounded ${error.includes('month') ? 'border-red-500' : 'border-gray'} outline-none focus:border-purple-800`} />
          {error.includes("month") && <span className='text-[10px] text-red-500' >{error}</span>}
        </label>

        <label className='flex flex-col'>
        <span className={error.includes("year") ? "text-red-500" : ""} >Year</span>
          <input
            value={year}
            onChange={(e) => setDate("year", e.target.value)}
            type="text"
            className={`w-24 h-10 p-4 border rounded ${error.includes('year') ? 'border-red-500' : 'border-gray'} outline-none focus:border-purple-800`}
          />
          {error.includes("year") && <span className='text-[10px] text-red-500' >{error}</span>}
        </label>

        <button
          className='mt-8'
          type='submit'
        >
          <img src={button} />
        </button>
      </form>
    </div>
  )
}

export default Age
