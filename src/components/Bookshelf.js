import PropTypes from "prop-types";

const Bookshelf = ({ title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{books}</ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array,
  title: PropTypes.string,
};

export default Bookshelf;
