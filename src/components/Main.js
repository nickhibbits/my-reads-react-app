import { useEffect, useState } from "react";
import { getAll } from "../utils/BooksAPI";
import Bookshelf from "./Bookshelf";

const Main = ({ showSearchPage }) => {
  let [currentlyReading, setCurrentlyReading] = useState([]);
  let [wantToRead, setWantToRead] = useState([]);
  let [read, setRead] = useState([]);

  useEffect(() => {
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
  }, [read, wantToRead, currentlyReading]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title={"Currently Reading"} books={currentlyReading} />
          <Bookshelf title={"Want to Read"} books={wantToRead} />
          <Bookshelf title={"Read"} books={read} />
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => showSearchPage()}>Add a book</button>
      </div>
    </div>
  );
};

export default Main;
