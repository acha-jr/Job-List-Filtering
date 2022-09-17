import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { FilterProvider } from "./FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FilterProvider>
      <App />
    </FilterProvider>
  </>
);
