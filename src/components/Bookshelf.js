import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ title, books, shelfUpdate }) => {
  function onShelfUpdate() {
    shelfUpdate();
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.title}>
                <Book book={book} onShelfUpdate={onShelfUpdate} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string,
};

export default Bookshelf;
