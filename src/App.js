import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Victoria" />
      <footer>
        This project was coded by Rachel Komori and is{" "}
        <a
          href="https://github.com/raachelkk/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and hosted on{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}
