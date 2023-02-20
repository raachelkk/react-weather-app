import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Rachel Komori and is{" "}
        <a
          href="https://github.com/raachelkk/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
