import React from "react";
import { useContext } from "react";
import Filter from "./components/Filter";
import Jobs from "./components/Jobs";

import FilterContext from "./FilterContext";

function App() {
  const { filter } = useContext(FilterContext);

  return (
    <div className='container'>
      {filter.length > 0 && <Filter />}
      <Jobs />
      <div className='attribution'>
        Challenge by{" "}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noopener noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href='https://github.com/acha-jr'
          target='_blank'
          rel='noopener noreferrer'
        >
          acha-jr
        </a>
        .
      </div>
    </div>
  );
}

export default App;
