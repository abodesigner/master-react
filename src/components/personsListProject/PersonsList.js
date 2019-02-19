import React from 'react';
import './person.css'
// Parent Component
const PersonsList = () => {

    const people = [
        {img:'https://www.placehold.it/100/eee', name:'amr',  job:'PHP Developer'},
        {img:'https://www.placehold.it/100/0f0', name:'owis', job:'.NET Developer'},
        {img:'https://www.placehold.it/100/f00', name:'noor', job:'Front end devloper'}
    ]
    return(
        <div className="personslist">
            <Person person = {people[0]} >
                <button>more</button>
            </Person>
            <Person person = {people[1]} />
            <Person person = {people[2]} />
        </div>
    )
}

//Child Component
const Person = (props) => {
    const {img, name, job } = props.person;
    const { children } = props;
    
    return(
        <div className='person'>
            <img src={img} alt="personImge" />
            <h2>{name}</h2>
            <p>{job}</p>
            {children}
        </div>
    )
}

export default PersonsList