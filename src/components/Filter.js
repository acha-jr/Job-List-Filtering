import "./Filter.css";
import FilterContext from "../FilterContext";
import { useContext } from "react";

const Filter = () => {
  const { filter, clearFilter, removeFilter } = useContext(FilterContext);

  return (
    <div className='filter'>
      <ul>
        {filter.map((item, index) => (
          <li key={index}>
            {item}
            <span onClick={() => removeFilter(item)}>
              <img src='./images/icon-remove.svg' alt='' />
            </span>
          </li>
        ))}
      </ul>
      <p onClick={clearFilter}>Clear</p>
    </div>
  );
};

export default Filter;
