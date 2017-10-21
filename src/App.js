import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import SelectPosition from "./Book";
import SearchAndAdd from "./SearchAndAdd";
import Bookshelf from "./Bookshelf";
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        books: [
            {
                shelf: "Currently Reading",
                title: "To Kill a Mockingbird",
                authors: "Harper Lee",
                imageLinks: {
                    smallThumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
                }
            },
            {
                shelf: "Want to Read",
                title: "Harry Potter and the Sorcerer's Stone",
                authors: "J.K. Rowling",
                imageLinks: {
                    smallThumbnail:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
                }
            },
            {
                shelf: "Currently Reading",
                title: "Ender's Game",
                authors: "Orson Scott Card",
                imageLinks: {
                    smallThumbnail:"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
                }
            },
            {
                "shelf": "Read",
                title: "The Hobbit",
                authors: "J.R.R. Tolkien",
                imageLinks: {
                    smallThumbnail:"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
                }
            }
        ]
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState((prevState) => {
                return {books:prevState.books.concat(books)}
            })
        })
    }

    changeShelf = (value, book) => {
        this.setState((prevState) => {
            // prevState.books.filter((b) => b.bookTitle !== book.bookTitle)
            book.shelf = value
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (

                    <Bookshelf
                        books={this.state.books}
                        onChangeShelf={this.changeShelf}
                    />
                )}/>
                <Route exact path="/search" render={({history}) => (
                    <SearchAndAdd
                        books={this.state.books}
                        onChangeShelf={(shelfValue,book) =>{
                            this.changeShelf(shelfValue,book);
                            history.push('/')
                        }}
                    />
                )}/>

            </div>
        );
    }
}

export default BooksApp
