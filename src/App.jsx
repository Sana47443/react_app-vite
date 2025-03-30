import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


function ZineList() {
  const zines = [
    { id: 1, title: "Eco Living", available: true },
    { id: 2, title: "Tech Today", available: true },
    { id: 3, title: "Old School Print", available: false },
  ];

  return (
    <div>
      <h3>Magazine Rack</h3>
      <ul>
        {zines.map((zine) => (
          <li key={zine.id} style={{ color: zine.available ? 'green' : 'red' }}>
            {zine.title}
          </li>
        ))}
      </ul>
    </div>
  );
}


function BookCard() {
  const book = {
    title: "The Paper Trail",
    author: "Eliza Brooke",
    year: "2022",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png",
  };

  return (
    <div>
      <h2>{book.title} ({book.year})</h2>
      <p>{book.author}</p>
      <img src={book.cover} alt={book.title} width="250" />
    </div>
  );
}


function ClickCounter({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} {count === 1 ? "time" : "times"}</button>
      {count >= 5 && <p>That's a lot of clicks (You went over 5!) 👏</p>}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>React + Vite Mini Showcase</h1>

      <div className="card">
        <ZineList />
        <BookCard />
        <ClickCounter count={count} setCount={setCount} />
      </div>

      <p className="read-the-docs">Crafted with 💚 by Sahana Balaji</p>
    </>
  );
}

export default App;
