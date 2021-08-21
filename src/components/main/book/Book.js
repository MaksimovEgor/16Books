import React from 'react'
import './book.less'


const Book = (props) => {
    const book = props.book

    console.log(book) // temporary

    return (
        <div className='book'>
            <div className="book-img">
                <img src={book.volumeInfo.imageLinks.thumbnail}/>
            </div>
            <div className="book-title">{book.volumeInfo.title}</div>
            <div className="book-info"></div>
        </div>
    );
};

export default Book;