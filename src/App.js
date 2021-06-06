import Dictionary from "./Dictionary";
import searching from "./searching.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={searching}
            className="App-searching img-fluid"
            alt="searching"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">
          <small>
            Project coded by Roxana Lupei and{" "}
            <a
              href="https://github.com/Roxana-L/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
