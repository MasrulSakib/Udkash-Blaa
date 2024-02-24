import './App.css';
import Intro from './components/Intro/Intro';
import Invest from './components/Invest/Invest';
import Products from './components/Products/Products';
import Videos from './components/Videos/Videos';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Products></Products>
      <Invest></Invest>
      <Videos></Videos>
    </div>
  );
}

export default App;
