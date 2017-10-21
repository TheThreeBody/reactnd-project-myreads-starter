import React, {Component} from "react";
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from "./Book";
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchAndAdd extends Component {

    state = {
        query: ''
    }

    componentWillMount() {
        // BooksAPI.getAll().then((books) => {
        //     this.setState({books: books})
        //     console.log(books);
        // })
    }


    queryTorA = (query) => {
        this.setState(
            {query: query.trim()}
        )
    }

    render() {
        const {query} = this.state;
        const {books, onChangeShelf} = this.props;

        let showingBooks;

        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            showingBooks = books.filter((book) => match.test(book.title) && match.test(book.authors))
        } else {
            showingBooks = books;
        }
        showingBooks.sort(sortBy('name'));

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">

                        <input value={query} onChange={(e) => this.queryTorA(e.target.value)} type="text"
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">results</h2>
                    </div>
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                onChangeShelf={onChangeShelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }

}

export default SearchAndAdd