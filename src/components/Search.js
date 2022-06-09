import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { search } from "../utils/BooksAPI";
import { getAll } from "../utils/BooksAPI";
import Book from "./Book";

const Search = () => {
  let [query, setQuery] = useState("");
  let [books, setBooks] = useState([]);
  let [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    const queryBooks = async () => {
      const res = await search(query, 20);
      setBooks(res);
    };

    const fetchBooks = async () => {
      const res = await getAll();
      setMyBooks(res);
    };

    fetchBooks();
    queryBooks();
  }, [query]);

  const updateQuery = async (_query) => {
    return setQuery(_query);
  };

  function onShelfUpdate() {
    return;
  }

  const matchingBooks = () => {
    if (query === "") {
      return [];
    } else if (query !== "" && !books) {
      return [];
    } else if (books.error) {
      return [];
    } else {
      books.forEach((book) => {
        myBooks.forEach((myBook) => {
          if (myBook.title === book.title) {
            book.shelf = myBook.shelf;
          }
        });
      });

      console.log("books", books);

      return books.filter((book) => book.imageLinks);
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
              <li key={book.id}>
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
