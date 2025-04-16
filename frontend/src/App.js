import React, { useState } from 'react';

function App() {
  const [idea, setIdea] = useState({
    title: '',
    description: '',
    departments: []
  });

  const departmentsList = [
    'Finance',
    'Presales',
    'Sales',
    'Professional Services',
    'Operations',
    'HR'
  ];

  const toggleDepartment = (dept) => {
    setIdea((prev) => {
      const updated = prev.departments.includes(dept)
        ? prev.departments.filter((d) => d !== dept)
        : [...prev.departments, dept];
      return { ...prev, departments: updated };
    });
  };

  const handleSubmit = async () => {
    console.log('Idea to submit:', idea);
    alert('Idea submitted! (not yet connected to backend)');
    setIdea({ title: '', description: '', departments: [] });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Operational Efficiency Idea</h1>

      <input
        type="text"
        placeholder="Idea Title"
        value={idea.title}
        onChange={(e) => setIdea({ ...idea, title: e.target.value })}
        style={{ width: '300px', padding: '0.5rem', marginBottom: '1rem' }}
      /><br />

      <textarea
        placeholder="Idea Description"
        value={idea.description}
        onChange={(e) => setIdea({ ...idea, description: e.target.value })}
        rows={6}
        style={{ width: '300px', padding: '0.5rem' }}
      ></textarea><br /><br />

      <label><strong>Departments Affected:</strong></label><br />
      {departmentsList.map((dept) => (
        <label key={dept} style={{ display: 'block', marginBottom: '4px' }}>
          <input
            type="checkbox"
            checked={idea.departments.includes(dept)}
            onChange={() => toggleDepartment(dept)}
          />
          {' '}{dept}
        </label>
      ))}

      <br />
      <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem' }}>
        Submit
      </button>
    </div>
  );
}

export default App;
