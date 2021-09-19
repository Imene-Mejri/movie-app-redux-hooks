
import './App.css';
import Navbar from './components/Nabvar';
import Footer from './components/Footer';
import Search from './components/Search'
import MovieList from './components/MovieList';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Search/>
     <MovieList/>
     <Footer/>
    </div>
  );
}

export default App;
