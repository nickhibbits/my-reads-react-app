import PropTypes from "prop-types";

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.bookCoverURL,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select>
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
      <div className="book-title">{book.bookTitle}</div>
      <div className="book-authors">{book.bookAuthor}</div>
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
