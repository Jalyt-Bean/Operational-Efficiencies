import React, { useState } from 'react';

function App() {
  const [idea, setIdea] = useState({ title: '', description: '' });

  const handleSubmit = async () => {
    console.log('Idea to submit:', idea);
    // TODO: Send this to backend via fetch/axios
    alert('Idea submitted! (not yet connected to backend)');
    setIdea({ title: '', description: '' });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Submit an Idea</h1>
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
      <button onClick={handleSubmit} style={{ padding: '0.5rem 1rem' }}>
        Submit
      </button>
    </div>
  );
}

export default App;
