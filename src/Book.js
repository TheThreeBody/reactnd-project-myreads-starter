import React, {Component} from 'react'

class Book extends Component {

    state = {
        // shelf: []
    }

    componentDidMount() {
        // this.setState(
        //     {
        //         shelf: this.props.shelf
        //     }
        // )
    }

    render() {
        const {book, onChangeShelf} = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={book.shelf}
                                    onChange={(event) => onChangeShelf(event.target.value, book)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="Currently Reading">Currently Reading</option>
                                <option value="Want to Read">Want to Read</option>
                                <option value="Read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }

}

export default Book