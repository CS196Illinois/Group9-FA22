import React from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import SearchBar from "./Components/SearchBar";
import PlaylistData from "./Data.json";
import Credit from "./Credit.js";
import Logo from "./Logo";
import SpotifyLogin from "./SpotifyLogin.jsx";

function App() {
  return (
    <div className="App">
      <Logo />
      <SpotifyLogin />
      <SearchBar placeholder="Enter an album..." data={PlaylistData} />
      <Credit/>
    </div>
  );
}

export default App;
