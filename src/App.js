import React, {useState} from "react";
import  { cards } from "./data"



function App() {

const [people,setPeople]=useState(cards)
const handelDelete = (id) => { 
  setPeople(people.filter((person) => person.id !== id))




}

  return (
    <div className="container">
      <h1>List App {people.length}</h1>

      <div className="cards">
        {console.log("this is working")}
        {people.map(({name, bio, id}) =>(
    <article key={bio}>

              <h2>{name}</h2>
              <p>{bio}</p>
              <button className="danger" onClick={()=>handelDelete(id)}>Remove</button>
            </article>
        ))}
          
        



      </div>
    </div>
  );
}

export default App;
