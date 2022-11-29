
import './App.css';
import Carusol from './components/Carusol/Carusol';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carusol></Carusol>
      <Welcome></Welcome>
      <Footer></Footer>
    </div>
  );
}

export default App;
