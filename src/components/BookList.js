import React from 'react';
import './book.css';

const BookList = () => {
    // Imagine the book component accept 50 props or argument ... messy code
    // here the destructring is very usful to separate all the props in some area , 
    // then you can access them
    const myFavBooks = [
        {bookTitle:'html', author:'ayman', bookCover:'https://www.placehold.it/150/080', price:'$150', discount:'%5', dateUploaded:'2018'},
        {bookTitle:'css', author:'ayman', bookCover:'https://www.placehold.it/150/080', price:'$150', discount:'%5', dateUploaded:'2018'},
        {bookTitle:'Javascript', author:'ayman', bookCover:'https://www.placehold.it/150/080', price:'$150', discount:'%5', dateUploaded:'2018'},
        {bookTitle:'ReactJS', author:'ayman', bookCover:'https://www.placehold.it/150/080', price:'$150', discount:'%5', dateUploaded:'2018'},
    ]
    return (
        <div className='booklist'>
            <Book bookTitle="html" author="ayman" bookCover="https://www.placehold.it/150/080" price="$150" discount="5%" dateUploaded="2019"/>
            <Book bookTitle="css" author="anas"  bookCover="https://www.placehold.it/150/333"/>
            <Book bookTitle="javascript" author="owis"  bookCover="https://www.placehold.it/150/00f"/>
            <Book bookTitle="reactjs" author="mody"  bookCover="https://www.placehold.it/150/f00"/>
            <Book bookTitle="php" author="wanos"  bookCover="https://www.placehold.it/150/000">
                <button>Add To Cart</button>
                <button>more info</button>
            </Book>
        </div>
    )
}

    // first way => use it in function parameters
    const Book = (props) => {
    
    // Second Way => use it in function body
    const {bookTitle, author, bookCover, price, discount, dateUploaded} = props;
    const {children} = props;
    
    return (
        <div className='book'>
            <img src={bookCover} alt="bookCover" />
            <h1>{bookTitle}</h1>
            <p>{`Author: ${author}`}</p>
            <h6 style={{backgroundColor:'#000', color:'#eee', padding:'0.5rem'}}>{`Price: ${price}`}</h6>
            <h6 style={{backgroundColor:'#f00', color:'#eee', padding:'0.5rem'}}>{`Discount: ${discount}`}</h6>
            <h6 style={{backgroundColor:'#ff0', color:'#333', padding:'0.5rem'}}>{`DateUploaded:  ${dateUploaded}`}</h6>
            {children}
        </div>
    )
}

export default BookList