import './App.css';
import SearchBar from './Components/SearchBar';
import PlaylistData from './Data.json';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Playlist" data={PlaylistData} />;
    </div>
  )
}

export default App;
