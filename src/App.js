import React, { useState } from "react";
import data from "./data";
import List from "./components/List";
export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{data.length} birthdays today</h3>
        <List people={people} />
        <button onClick={null}>Clear All</button>
      </section>
    </main>
  );
}
