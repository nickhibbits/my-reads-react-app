const Search = ({ showSearchPage }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => showSearchPage()}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default Search;
