import React from 'react';
import HogCard from './HogCard';

function HogList({ hogs, greasedOnly, sortBy, hideHog }) {
  const filteredHogs = greasedOnly ? hogs.filter(hog => hog.greased) : hogs;

  const sortedHogs = sortBy === 'name'
    ? [...filteredHogs].sort((a, b) => a.name.localeCompare(b.name))
    : sortBy === 'weight'
      ? [...filteredHogs].sort((a, b) => a.weight - b.weight)
      : filteredHogs;

  return (
    <div className="hog-list">
      {sortedHogs.map(hog => (
        <HogCard key={hog.name} hog={hog} hideHog={hideHog} />
      ))}
    </div>
  );
}

export default HogList;