import React from "react";
import data from "./data";
import List from "./components/List";
export default function App() {
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={null}>Clear All</button>
      </section>
    </main>
  );
}
