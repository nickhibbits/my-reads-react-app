import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { search } from "../utils/BooksAPI";
import { getAll, update } from "../utils/BooksAPI";
import Book from "./Book";

function Search() {
  let [query, setQuery] = useState("");
  let [books, setBooks] = useState([]);
  let [myBooks, setMyBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await getAll();
    setMyBooks(res);
  };

  useEffect(() => {
    const queryBooks = async () => {
      const res = await search(query, 20);
      setBooks(res);
    };

    if (query.length !== 0) {
      fetchBooks();
      queryBooks();
    }
  }, [query]);

  const updateQuery = async (_query) => {
    return setQuery(_query);
  };

  const onShelfUpdate = (book, shelf) => {
    update(book, shelf);
    fetchBooks();
    return;
  };

  const matchingBooks = () => {
    if (query === "") {
      return [];
    } else if (query !== "" && !books) {
      return [];
    } else if (books.error) {
      return [];
    } else {
      books.forEach((book) => {
        book.shelf = "none";
        myBooks.forEach((myBook) => {
          if (myBook.id === book.id) {
            book.shelf = myBook.shelf;
          }
        });
      });

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
}

export default Search;
