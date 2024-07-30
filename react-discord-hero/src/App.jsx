// src/App.jsx
import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import discoBg from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        style={{ width: 150, position: "absolute", top: 30, left: 30 }}
      />
      <img
        src={menu}
        style={{ width: 40, position: "absolute", top: 30, left: 1850 }}
      />
      <div style={{ width: 300, marginLeft: 30 }}>
        <h1>IMAGINE A PLACE...</h1>
      </div>
      <div style={{ width: 450, marginLeft: 30 }}>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <button
          style={{
            marginBottom: 20,
            marginTop: 10,
            backgroundColor: "#FFFFFF",
            color: "#23272A",
          }}
        >
          Download for Mac
        </button>
        <br />
        <button>Open Discord in your browser</button>
      </div>
      <div>
        <img
          src={discoBg}
          style={{ position: "absolute", left: 330, top: 600 }}
        />
      </div>
    </div>
  );
}

export default App;
