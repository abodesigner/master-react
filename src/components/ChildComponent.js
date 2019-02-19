import React from 'react'

function ChildComponent(props) {
  /**
   * When click on greet button in the child component, 
   * i want to fire the method in parent component
   * this achieved by using props
   */
    return (
    <div>
        
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
