import { useState } from "react";
import "./App.css";
import {
  GsapScrollXPin,
  GsapScrollZoom,
  GsapScrollZoomPin,
} from "./components/GSAP";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <nav>
        <span style={{ fontWeight: "700" }}>GSAP components</span>
        <div className=" nav-ico">
          <a href="https://github/kelvinohemeng" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path>
            </svg>
            <span>view repo</span>
          </a>
          <a href="mailto:kelvinohemeng59@gmail.com" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
            </svg>
            <span>buy me a coffe</span>
          </a>
        </div>
      </nav>
      <main className=" ">
        <GsapScrollXPin>
          <div className="scroll-item">
            <h1> card</h1>
          </div>
          <div className="scroll-item">
            <h1> card</h1>
          </div>
          <div className="scroll-item">
            <h1> card</h1>
          </div>
          <div className="scroll-item">
            <h1> card</h1>
          </div>
        </GsapScrollXPin>

        <GsapScrollZoom>
          <div className="inlin">
            <h1>let's zoom</h1>
          </div>
        </GsapScrollZoom>

        <GsapScrollZoomPin>
          <div className="inlin">
            <h1>let's zoom with pin</h1>
          </div>
        </GsapScrollZoomPin>
      </main>
      <footer>
        <h5>made with ❤️ by kelvin Ohemeng</h5>
      </footer>
    </div>
  );
}

export default App;
