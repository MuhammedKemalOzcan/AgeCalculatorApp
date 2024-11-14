import React, { useEffect, useState } from 'react'

function AgeShow({ date, error }) {

    const [calculatedDate, setCalculatedDate] = useState({ years: 0, months: 0, days: 0 });

    const today = new Date();

    const calculate = () => {
        const { day, month, year } = date;
        if (error) return { years: "--", months: "--", days: "--" };
        if (day == "" || month == "" || year == "") return { years: "--", months: "--", days: "--" };

        let newYears = today.getFullYear() - year;
        let newMonths = today.getMonth() - (month - 1);
        let newDays = today.getDate() - day;

        if (newDays < 0) {
            newMonths -= 1;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            newDays += prevMonth;
        }

        if (newMonths < 0) {
            newYears -= 1;
            newMonths += 12;
        }

        return { years: newYears, months: newMonths, days: newDays };
    }

    useEffect(() => {
        const result = calculate();
        setCalculatedDate(result);
    }, [date, error]);



    return (
        <div>
            <div className='flex items-center'>
                <h1 className='text-9xl text-purple-700'>{calculatedDate.years}</h1>
                <h1 className='text-8xl font-bold'>years</h1>
            </div>
            <div className='flex items-center'>
                <h1 className='text-9xl text-purple-700'>{calculatedDate.months}</h1>
                <h1 className='text-8xl font-bold'>months</h1>
            </div>
            <div className='flex items-center'>
                <h1 className='text-9xl text-purple-700'>{calculatedDate.days}</h1>
                <h1 className='text-8xl font-bold'>days</h1>
            </div>
        </div>
    )
}

export default AgeShow
