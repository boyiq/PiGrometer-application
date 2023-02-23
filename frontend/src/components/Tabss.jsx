import React from 'react'

const Tabss = (history, setHistory) => {
  const selectedBkg = {backgroundColor: "#E9D8FD"}
  const changeHistory = (value) => {
    setHistory(value)
  }
  return (
    <div className='historyTabs'>
        <button 
          className='tabs'
          onClick={(event)=>{
            event.preventDefault()
            console.log('clicked')
            changeHistory(1)
          }}
          style={history === 1 ? {backgroundColor: 'white'} : selectedBkg}
        >
          Past 24 hours
        </button>
        <button 
          className='tabs'
          onClick={(event)=>{
            event.preventDefault()
            console.log('clicked')
            changeHistory(3)
          }}
          style={history === 3 ? {backgroundColor: 'white'} : selectedBkg}
        >
          Past 3 days
        </button>
        <button 
          className='tabs'
          onClick={(event)=>{
            event.preventDefault();
            console.log('clicked')
            changeHistory(7)
          }}
          style={history === 7 ? {backgroundColor: 'white'} : selectedBkg}
        >
          Past 7 days
        </button>
    </div>
  )
}

export default Tabss
