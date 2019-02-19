import React from 'react'

function CurrentDateOfWeek() {
    const date = new Date('2019');
  return (
    <div>
      <Greet />  
      <p>{date.toString()}</p>
    </div>
  )
}

const Greet = () => <p>Hello</p>
export default CurrentDateOfWeek
