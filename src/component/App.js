import logo from '../images/logo.svg';
import Form from './Form';
import '../css/App.css';
import Footer from './Footer';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <h1>Calculator</h1>
          <Calculator />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
