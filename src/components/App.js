
import React, { useState } from 'react';
import HogList from './HogList';
import HogForm from './HogForm';
import data from '../porkers_data';

function App() {
  const [hogs, setHogs] = useState(data);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');

  const toggleGreasedOnly = () => {
    setGreasedOnly(!greasedOnly);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const hideHog = (hogName) => {
    setHogs(hogs.filter(hog => hog.name !== hogName));
  };

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  return (
    <div className="App">
      <h1>Hog App</h1>
      <div>
        <label>
          <input type="checkbox" checked={greasedOnly} onChange={toggleGreasedOnly} />
          Greased Only
        </label>
        <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <HogList hogs={hogs} greasedOnly={greasedOnly} sortBy={sortBy} hideHog={hideHog} />
	  <HogForm addHog={addHog}/>
    </div>
  );
}

export default App;