import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books?.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;

/**
 * 1. state to store books
 * 2. useEffect
 * 3. fetch to load data 
 * 4. set the data to books state
 */