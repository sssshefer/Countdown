import React from 'react';
import './App.css';
import Title from "./UI/title/Title";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
        <div className="timerWrap">
            <Title title={'Birthday countdown'}/>
            <Timer />
        </div>
    </div>
  );
}

export default App;
