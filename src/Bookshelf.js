import React, {Component} from "react";
import Book from "./Book";
import {Link} from "react-router-dom";

class Bookshelf extends Component {

    state = {
        books: [],
        shelfs: ["Currently Reading", "Want to Read", "Read"],

        currentlyReading: [],
        wantToRead:[],
        read:[],
        none:[]
    };

    componentDidMount() {
        // this.setState((prevState) =>
        // {
        //     prevState.currentlyReading.concat()
        //     prevState.shelfs.concat(this.props.shelfs)
        // }
        //
        // );
    }



    render() {

        const {books, onChangeShelf} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.state.shelfs.map((shelfName) => (
                            <div key={shelfName} className="bookshelf">
                                <h2 className="bookshelf-title">{shelfName}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {books.filter((book) => book.shelf === shelfName).map((book) =>
                                            <Book
                                                key={book.id}
                                                book={book}
                                                onChangeShelf={onChangeShelf}
                                            />
                                        )}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Bookshelf