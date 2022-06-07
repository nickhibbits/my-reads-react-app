import "../css/App.css";
import { useState } from "react";
import Search from "./Search";
import Main from "./Main";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  function _showSearchPage() {
    console.log("_showSearchPage");
    setShowSearchpage(!showSearchPage);
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <Search showSearchPage={_showSearchPage} />
      ) : (
        <Main showSearchPage={_showSearchPage} />
      )}
    </div>
  );
}

export default App;
