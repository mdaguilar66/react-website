import BannerImage from './components/BannerImage';
import PhotoEntry from './components/PhotoEntry';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to my photojournal</h1>
          <h3>Molly d'Aguilar</h3>
          <PhotoEntry src="red-living-room.jpeg" caption="A funky red living room" location="London UK" />
        </div>
      </header>
    </div>
  );
}

export default App;
