/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './calendar.css'

function Calendar({ setShowCalendar, selectedDay, setSelectedDay }) {
  const [first, setFirst] = useState(0)
  const [dias, setDias] = useState([])
  const [year, setYear] = useState(2014)
  const [month, setMonth] = useState(6)
  const diasObj = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 }
  const mesesArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const getFirst = () => {
    return (new Date(year, month)).toString().split(' ')[0]
  }
  function crearArray(num) {
    let numeros = [];
    for (let i = 1; i <= num; i++) {
      numeros.push(i);
    }
    return numeros;
  }
  const getCount = () => {
    return (new Date(year, month + 1, 0)).getDate()
  }

  const numToString = num => {
    if(num > 9) return num.toString()
    else return 0 + num.toString()
  }

  useEffect(() => {
    const dia = numToString(selectedDay)
    const mes = numToString(month)
    console.log(`${dia}/${mes}/${year}`);
  }, [selectedDay])

  useEffect(() => {
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    const dateArray = date.toString().split(' ')
    const currentDay = Number(dateArray[2])
    setSelectedDay(currentDay)
    setYear(currentYear)
    setMonth(currentMonth)
  }, [])

  useEffect(() => {
    const primerdia = getFirst()
    setFirst(diasObj[primerdia])
    const diasDeMes = getCount()
    const arrayDeDias = crearArray(diasDeMes)
    setDias(arrayDeDias)
  }, [month, year])

  const handleDayClick = value => {
    setSelectedDay(value);
    setShowCalendar(prev => !prev)
  }

  const handleChengeMonth = (side) => {
    if (side === 'prev') {
      if (month === 0) {
        setMonth(11)
        setYear(prev => prev - 1)
      }
      else setMonth(prev => prev - 1)
    }
    if (side === 'next') {
      if (month === 11) {
        setMonth(0)
        setYear(prev => prev + 1)
      }
      else setMonth(prev => prev + 1)
    }
  }

  return (
    <div className='calendar-container'>
      <div className="calendar-header">
        <span className="calendar-text">
          {mesesArray[month]} {year}
        </span>
        <div className="calendar-frame9">
          <button type="button" className="calendar-button" onClick={() => handleChengeMonth('prev')}>
            <img
              alt="prev icon"
              src="/prev_icon.svg"
              className="calendar-frame10"
            />
          </button>
          <button type="button" className="calendar-button1" onClick={() => handleChengeMonth('next')}>
            <img
              alt="next icon"
              src="/next_icon.svg"
              className="calendar-frame101"
            />
          </button>
        </div>
      </div>
      <ol className='calendar-list'>
        <li className='calendar-list-heading' key={'lun'}>Lun</li>
        <li className='calendar-list-heading' key={'mar'}>Mar</li>
        <li className='calendar-list-heading' key={'mie'}>Mie</li>
        <li className='calendar-list-heading' key={'jue'}>Jue</li>
        <li className='calendar-list-heading' key={'vie'}>Vie</li>
        <li className='calendar-list-heading' key={'sab'}>Sab</li>
        <li className='calendar-list-heading' key={'dom'}>Dom</li>
        <li
          key={1}
          style={{
            gridColumnStart: first,
            backgroundColor: selectedDay === 1 ? '#45539D' : '#fff',
            color: selectedDay === 1 && '#fff'
          }}
          onClick={() => handleDayClick(1)}
          className='calendar-list-item'
        >
          1
        </li>
        {
          dias && dias.length > 1 ?
            dias.slice(1).map(dia => {
              return (
                <li
                  key={dia}
                  onClick={() => handleDayClick(dia)}
                  className='calendar-list-item'
                  style={{ backgroundColor: selectedDay === dia ? '#45539D' : '#fff', color: selectedDay === dia && '#fff' }}
                >
                  {dia}
                </li>
              )
            })
            : null
        }
      </ol>
    </div>
  )
}

export default Calendar
