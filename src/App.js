import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div class="container">
          <h1>Welcome to my photojournal</h1>
          <h3>Molly d'Aguilar</h3>
          <AlbumMaker />
        </div>
      </header>
    </div>
  );
}

export default App;
