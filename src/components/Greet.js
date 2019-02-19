import React from 'react';

// function Greet(){
//     return <h1>Hello from functional component</h1>
// }

const Greet = ({name, age, children}) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>My age {age}</p>
            {children}    
        </div>
    ) 
    
}

export default Greet;