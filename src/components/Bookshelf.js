import PropTypes from "prop-types";
import { useState } from "react";
import { getAll, update } from "../utils/BooksAPI";

const Bookshelf = ({ title }) => {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const res = await getAll();
    console.log("res", res);
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{getBooks()}</ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string,
};

export default Bookshelf;
