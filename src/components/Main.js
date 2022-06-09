import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../utils/BooksAPI";
import Bookshelf from "./Bookshelf";

function Main() {
  let [currentlyReading, setCurrentlyReading] = useState([]);
  let [wantToRead, setWantToRead] = useState([]);
  let [read, setRead] = useState([]);
  let [shelfChanged, setShelfChanged] = useState(true);

  useEffect(() => {
    let _shelfChanged = true;
    if (_shelfChanged) {
      const fetchBooks = async () => {
        const res = await getAll();
        sortBooks(res);
      };

      const sortBooks = (booksList) => {
        setRead(booksList.filter((book) => book.shelf === "read"));
        setWantToRead(booksList.filter((book) => book.shelf === "wantToRead"));
        setCurrentlyReading(
          booksList.filter((book) => book.shelf === "currentlyReading")
        );
      };

      fetchBooks();
    }

    return () => {
      _shelfChanged = false;
    };
  }, [shelfChanged]);

  function updateShelf() {
    setShelfChanged(!shelfChanged);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            title={"Currently Reading"}
            books={currentlyReading}
            shelfUpdate={updateShelf}
          />
          <Bookshelf
            title={"Want to Read"}
            books={wantToRead}
            shelfUpdate={updateShelf}
          />
          <Bookshelf title={"Read"} books={read} shelfUpdate={updateShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Main;
