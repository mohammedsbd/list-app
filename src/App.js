import React from "react";
import  { cards } from "./data"



function App() {
  return (
    <div className="container">
      <h1>List App</h1>

      <div className="cards">
        {console.log("this is working")}
        {cards.map(({name, bio}) =>(
    <article key={bio}>

              <h2>{name}</h2>
              <p>{bio}</p>
            </article>
        ))}
          
        



      </div>
    </div>
  );
}

export default App;
