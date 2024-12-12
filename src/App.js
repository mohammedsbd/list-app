import React, {useState} from "react";
import  { cards } from "./data"



function App() {

const [people,setPeople]=useState(cards)

  return (
    <div className="container">
      <h1>List App</h1>

      <div className="cards">
        {console.log("this is working")}
        {people.map(({name, bio}) =>(
    <article key={bio}>

              <h2>{name}</h2>
              <p>{bio}</p>
              <button className="danger">Remove</button>
            </article>
        ))}
          
        



      </div>
    </div>
  );
}

export default App;
