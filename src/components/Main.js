import Bookshelf from "./Bookshelf";

const Main = ({ showSearchPage }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf title={"Currently Reading"} />
          <Bookshelf title={"Want to Read"} />
          <Bookshelf title={"Read"} />
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => showSearchPage()}>Add a book</a>
      </div>
    </div>
  );
};

export default Main;
