import PropTypes from "prop-types";
import { update } from "../utils/BooksAPI";

const Book = ({ book }) => {
  // console.log("bookShelf", book.shelf);

  function updateShelf(bookShelfOption) {
    console.log("bookShelfOption", bookShelfOption);

    update(book, bookShelfOption);
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={(e) => updateShelf(e.target.value)}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookCoverURL: PropTypes.string,
    bookTitle: PropTypes.string,
    bookAuthor: PropTypes.string,
  }),
};

export default Book;
