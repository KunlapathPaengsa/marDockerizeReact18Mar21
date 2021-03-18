import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hello World! </h1><br/>
          <h2>I'm Kougar.</h2> 
        </p>
        
        <a
          className="DockerHub-link"
          href="https://hub.docker.com/r/kunlapath/react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          To watch my DockerHub
        </a>
      </header>
    </div>
  );
}

export default App;
