import data from "../data.json";
import "./Jobs.css";
import { useState, useEffect, useContext } from "react";
import FilterContext from "../FilterContext";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const { filter, addFilter } = useContext(FilterContext);

  const arr =
    filter.length > 0
      ? jobs.filter((tag) => {
          const tags = [tag.role, tag.level, ...tag.languages, ...tag.tools];
          return filter.every((x) => tags.includes(x));
        })
      : jobs;

  return (
    <main>
      {arr.map((item, index) => {
        const tags = [item.role, item.level, ...item.languages, ...item.tools];

        return (
          <div
            className='card'
            key={index}
            style={{
              borderLeft: item.featured && "4px solid hsl(180, 29%, 50%)",
            }}
          >
            <div className='info'>
              <img src={item.logo} alt='logo' />

              <div className='details'>
                <div className='top'>
                  <h3 className='company'>{item.company}</h3>
                  {item.new && <h4 className='new'>NEW!</h4>}
                  {item.featured && <h4 className='featured'>FEATURED</h4>}
                </div>
                <h2 className='role'>{item.position}</h2>
                <div className='bottom'>
                  <p>{item.postedAt}</p>
                  <p>•</p>
                  <p>{item.contract}</p>
                  <p>•</p>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>

            <ul className='tags'>
              {tags.map((tag, index) => (
                <li key={index} onClick={() => addFilter(tag)}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
