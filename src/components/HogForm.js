import React, { useState } from 'react';
function HogForm({ addHog }) {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [weight, setWeight] = useState(0);
    const [greased, setGreased] = useState(false);
    const [highestMedal, setHighestMedal] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newHog = {
        name,
        specialty,
        weight,
        greased,
        'highest medal achieved': highestMedal
      };
      addHog(newHog);
      // Reset the form fields
      setName('');
      setSpecialty('');
      setWeight(0);
      setGreased(false);
      setHighestMedal('');
    };
  
    return (
      <div className="hog-form">
        <h2>Add a New Hog</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Specialty:
            <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
          </label>
          <label>
            Weight:
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <label>
            Greased:
            <input type="checkbox" checked={greased} onChange={() => setGreased(!greased)} />
          </label>
          <label>
            Highest Medal Achieved:
            <input type="text" value={highestMedal} onChange={(e) => setHighestMedal(e.target.value)} />
          </label>
          <button type="submit">Add Hog</button>
        </form>
      </div>
    );
  }
  
  export default HogForm;