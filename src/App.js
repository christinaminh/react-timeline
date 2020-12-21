import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
// import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


function App() {
  console.log(timelineData.events[0]);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Application title</h1>
      </header>
      <main className="App-main">
        {/* <Timeline events={timelineData.events} /> */}
        <TimelineEvent event={timelineData.events[0]} />
      </main>
    </div>
  );
}

export default App;
