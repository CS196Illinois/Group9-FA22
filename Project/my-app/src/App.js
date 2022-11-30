import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import SearchBar from "./Components/SearchBar";
import PlaylistData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter an Album" data={PlaylistData} />;
    </div>
  );
}

export default App;
