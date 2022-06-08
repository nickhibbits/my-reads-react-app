import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { search } from "../utils/BooksAPI";
import Book from "./Book";

const Search = () => {
  let [query, setQuery] = useState("");
  let [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("query change", query);

    const getBooks = async () => {
      const res = await search(query, 20);
      setBooks(res);
      console.log("books", books);
    };

    getBooks();
  }, [query]);

  const updateQuery = async (_query) => {
    return setQuery(_query.trim());
  };

  function onShelfUpdate() {
    console.log("here");
  }

  const matchingBooks = () => {
    if (query === "") {
      return [];
    } else if (query !== "" && !books) {
      console.log(" query populated, no books");
      return [];
    } else {
      console.log("books", books);
      return books;
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {matchingBooks().map((book) => {
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

export default Search;
