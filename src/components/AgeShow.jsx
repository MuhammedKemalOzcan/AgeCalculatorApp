import React, { useEffect, useState } from 'react'

function AgeShow({ day, month, year, isValid }) {

    const [calculatedDate, setCalculatedDate] = useState({ years: 0, months: 0, days: 0 });

    const today = new Date();
    const calculate = () => {

        let newYears = today.getFullYear() - year;
        let newMonths = today.getMonth() - (month - 1);
        let newDays = today.getDate() - day;

        // Eğer gün negatifse, bir önceki aydan gün ödünç al
        if (newDays < 0) {
            newMonths -= 1;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            newDays += prevMonth;
        }

        // Eğer ay negatifse, bir önceki yıldan ay ödünç al
        if (newMonths < 0) {
            newYears -= 1;
            newMonths += 12;
        }

        return { years: newYears, months: newMonths, days: newDays };
    }

    useEffect(() => {
        const result = calculate();
        setCalculatedDate(result);
    }, [day, month, year]);



    return (
        <div>
            {
                isValid == 0 ?
                    <div>
                        <div className='flex items-center'>
                            <h1 className='text-9xl text-purple-700'>--</h1>
                            <h1 className='text-8xl font-bold'>years</h1>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-9xl text-purple-700'>--</h1>
                            <h1 className='text-8xl font-bold'>months</h1>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-9xl text-purple-700'>--</h1>
                            <h1 className='text-8xl font-bold'>days</h1>
                        </div>
                    </div>
                    :
                    isValid == 1 ?
                        <div>
                            <div className='flex items-center'>
                                <h1 className='text-9xl text-purple-700'>--</h1>
                                <h1 className='text-8xl font-bold'>years</h1>
                            </div>
                            <div className='flex items-center'>
                                <h1 className='text-9xl text-purple-700'>--</h1>
                                <h1 className='text-8xl font-bold'>months</h1>
                            </div>
                            <div className='flex items-center'>
                                <h1 className='text-9xl text-purple-700'>--</h1>
                                <h1 className='text-8xl font-bold'>days</h1>
                            </div>
                        </div>
                        :
                        isValid == 2 ?
                            <div>
                                <div className='flex items-center'>
                                    <h1 className='text-9xl text-purple-700'>--</h1>
                                    <h1 className='text-8xl font-bold'>years</h1>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-9xl text-purple-700'>--</h1>
                                    <h1 className='text-8xl font-bold'>months</h1>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-9xl text-purple-700'>--</h1>
                                    <h1 className='text-8xl font-bold'>days</h1>
                                </div>
                            </div>
                            :
                            isValid == 3 ?
                                <div>
                                    <div className='flex items-center'>
                                        <h1 className='text-9xl text-purple-700'>--</h1>
                                        <h1 className='text-8xl font-bold'>years</h1>
                                    </div>
                                    <div className='flex items-center'>
                                        <h1 className='text-9xl text-purple-700'>--</h1>
                                        <h1 className='text-8xl font-bold'>months</h1>
                                    </div>
                                    <div className='flex items-center'>
                                        <h1 className='text-9xl text-purple-700'>--</h1>
                                        <h1 className='text-8xl font-bold'>days</h1>
                                    </div>
                                </div>
                                :
                                isValid == 4 ?
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
                                    :
                                    <div>
                                        <div className='flex items-center'>
                                            <h1 className='text-9xl text-purple-700'>--</h1>
                                            <h1 className='text-8xl font-bold'>years</h1>
                                        </div>
                                        <div className='flex items-center'>
                                            <h1 className='text-9xl text-purple-700'>--</h1>
                                            <h1 className='text-8xl font-bold'>months</h1>
                                        </div>
                                        <div className='flex items-center'>
                                            <h1 className='text-9xl text-purple-700'>--</h1>
                                            <h1 className='text-8xl font-bold'>days</h1>
                                        </div>
                                    </div>

            }

        </div>
    )
}

export default AgeShow
