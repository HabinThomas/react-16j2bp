import React from 'react';
import Heading from './Heading';
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
            <Heading firstName="Bob" />
         {' '}
    </div>
  );
}

export default App;
