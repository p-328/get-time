import React, { useState, useRef } from 'react';
import Table from './Table';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [date, setDate] = useState('');
  const input = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [datestamp, setDatestamp] = useState('');
  const [unixTimestamp, setUnixTimestamp] = useState(0);
  const fetchTime = async () => { 
    const response = await fetch('http://localhost:8000/api/rightnow');
    await response.json()
      .then(data => {
        setTime(Number(data.Unix));
        setDate(data.RightNow);
      });
  }
  const fetchDate = async () => {
    const response = await fetch(`http://localhost:8000/api/${input.current.value}`);
    const json = await response.json();
    if (json.error) {
      input.current.value = '';
    } else {
      setDatestamp(json.time);
      setUnixTimestamp(Number(json.unix));
      input.current.value = '';
    }
  }
  return (
    <div className="microservice-parent-container">
      <h1 className="header">Time microservice</h1>
      <p className="message">Watch your life melt away!</p>
      <button onClick={fetchTime} className="fetcher">Fetch the time</button>
      <Table time={time} date={date} />
      <input ref={input} placeholder="Enter a date..." className="fetcher" />
      <button className="fetcher" onClick={fetchDate}>Submit</button>
      <Table time={unixTimestamp} date={datestamp}/>
    </div>
  );
}

export default App;
