import React, { useState } from 'react'
import "../app.css"
import button from "../assets/arrow.png"

function Age({ day, month, year, setDay, setMonth, setYear, isValid, setIsValid }) {



  const handleDayChange = ((e) => {
    setDay(e.target.value);

  });

  const handleMonthChange = ((e) => {
    setMonth(e.target.value);
  });

  const handleYearChange = ((e) => {
    setYear(e.target.value);
  });


  const handleSubmit = ((e) => {
    e.preventDefault();

    if (day > 31 || day <= 0) {
      setIsValid(1);
      console.log("Hatalı gün girildi.");
    }
    else if (month > 12 || month <= 0) {
      setIsValid(2);
      console.log("Hatalı ay girildi.");
    }
    else if (year <= 0 || year > 2024) {
      setIsValid(3);
      console.log("Hatalı yıl girildi.");
    }
    else if (day > 0 && month > 0 && year > 0 && day < 31 && month < 12 && year < 2024) {
      setIsValid(4);
    }
  })



  return (
    <div className='flex flex-col border-b-2'>
      {
        isValid == 0 ?
          <form className='flex gap-12 h-1/4'>
            <label className='flex flex-col'>
              Day
              <input
                value={day}
                onChange={handleDayChange}
                type="text"
                className='w-24 h-10 p-4 border rounded border-gray outline-none focus:border-purple-800'
              />
            </label>
            <label className='flex flex-col'>
              Month
              <input
                value={month}
                onChange={handleMonthChange}
                type="text"
                className='w-24 h-10 p-4 border rounded border-gray outline-none focus:border-purple-800'
              />
            </label>
            <label className='flex flex-col'>
              Year
              <input
                value={year}
                onChange={handleYearChange}
                type="text"
                className='w-24 h-10 p-4 border rounded border-gray outline-none focus:border-purple-800'
              />
            </label>
            <button
              className='mt-8'
              onClick={handleSubmit}
            >
              <img src={button} />
            </button>
          </form>
          :
          isValid == 1 ?
            <form className='flex gap-12 h-1/4'>
              <label className='flex flex-col'>
                <p className='text-red-500'>Day</p>
                <input
                  value={day}
                  onChange={handleDayChange}
                  type="text"
                  className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                />
                <span className='text-[10px] text-red-500'>Must be a valid day</span>
              </label>
              <label className='flex flex-col'>
                <p className='text-red-500'>Month</p>
                <input
                  value={month}
                  onChange={handleMonthChange}
                  type="text"
                  className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                />
              </label>
              <label className='flex flex-col'>
                <p className='text-red-500'>Year</p>
                <input
                  value={year}
                  onChange={handleYearChange}
                  type="text"
                  className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                />
              </label>
              <button
                className='mt-8'
                onClick={handleSubmit}
              >
                <img src={button} />
              </button>
            </form>
            :
            isValid == 2 ?
              <form className='flex gap-12 h-1/4'>
                <label className='flex flex-col'>
                  <p className='text-red-500'>Day</p>
                  <input
                    value={day}
                    onChange={handleDayChange}
                    type="text"
                    className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                  />
                </label>
                <label className='flex flex-col'>
                  <p className='text-red-500'>Month</p>
                  <input
                    value={month}
                    onChange={handleMonthChange}
                    type="text"
                    className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                  />
                  <span className='text-[9px] text-red-500'>Must be a valid month</span>
                </label>
                <label className='flex flex-col'>
                  <p className='text-red-500'>Year</p>
                  <input
                    value={year}
                    onChange={handleYearChange}
                    type="text"
                    className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                  />
                </label>
                <button
                  className='mt-8'
                  onClick={handleSubmit}
                >
                  <img src={button} />
                </button>
              </form>
              :
              isValid == 3 ?
                <form className='flex gap-12 h-1/4'>
                  <label className='flex flex-col'>
                    <p className='text-red-500'>Day</p>
                    <input
                      value={day}
                      onChange={handleDayChange}
                      type="text"
                      className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                    />
                  </label>
                  <label className='flex flex-col'>
                    <p className='text-red-500'>Month</p>
                    <input
                      value={month}
                      onChange={handleMonthChange}
                      type="text"
                      className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                    />
                  </label>
                  <label className='flex flex-col'>
                    <p className='text-red-500'>Year</p>
                    <input
                      value={year}
                      onChange={handleYearChange}
                      type="text"
                      className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                    />
                    <span className='text-[10px] text-red-500'>Must be a valid Year</span>
                  </label>
                  <button
                    className='mt-8'
                    onClick={handleSubmit}
                  >
                    <img src={button} />
                  </button>
                </form>
                :
                isValid == 4 ?
                  <form className='flex gap-12 h-1/4'>
                    <label className='flex flex-col'>
                      Day
                      <input
                        value={day}
                        onChange={handleDayChange}
                        type="text"
                        className='w-24 h-10 p-4 border rounded border-gray outline-none focus:border-purple-800'
                      />
                    </label>
                    <label className='flex flex-col'>
                      Month
                      <input
                        value={month}
                        onChange={handleMonthChange}
                        type="text"
                        className='w-24 h-10 p-4 border rounded border-gray outline-none focus:border-purple-800'
                      />
                    </label>
                    <label className='flex flex-col'>
                      Year
                      <input
                        value={year}
                        onChange={handleYearChange}
                        type="text"
                        className='w-24 h-10 p-4 border rounded border-gray outline-none focus:border-purple-800'
                      />
                    </label>
                    <button
                      className='mt-8'
                      onClick={handleSubmit}
                    >
                      <img src={button} />
                    </button>
                  </form>
                  :
                  <form className='flex gap-12 h-1/4'>
                    <label className='flex flex-col'>
                      <p className='text-red-500'>Day</p>
                      <input
                        value={day}
                        onChange={handleDayChange}
                        type="text"
                        className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                      />
                      <span className='text-[10px] text-red-500'>Must be a valid day</span>
                    </label>
                    <label className='flex flex-col'>
                      <p className='text-red-500'>Month</p>
                      <input
                        value={month}
                        onChange={handleMonthChange}
                        type="text"
                        className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                      />
                      <span className='text-[10px] text-red-500'>Must be a valid month</span>
                    </label>
                    <label className='flex flex-col'>
                      <p className='text-red-500'>Year</p>
                      <input
                        value={year}
                        onChange={handleYearChange}
                        type="text"
                        className='w-24 h-10 p-4 border rounded border-red-500 outline-none focus:border-purple-800'
                      />
                      <span className='text-[10px] text-red-500'>Must be a valid Year</span>
                    </label>
                    <button
                      className='mt-8'
                      onClick={handleSubmit}
                    >
                      <img src={button} />
                    </button>
                  </form>
      }
    </div>
  )
}

export default Age
