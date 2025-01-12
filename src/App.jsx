import IntakeForm from "./IntakeForm";
import mcLogo from "./assets/mcLogo.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <a
            href="https://www.montgomeryconstruction.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mcLogo} alt="Montgomery Construction" className="logo" />
          </a>
        </div>
      </header>
      <IntakeForm />
    </div>
  );
}

export default App;
