import React from "react";


const cards = [
  {
    name: "Mohammed Salih",
    bio: "He is an otaku aka Anime Addict",
  },
  {
    name: "Bill Gates",
    bio: "He is the richest man in the world, at least he was",
  },
  {
    name: "Roronoa Zoro",
    bio: "He wields three blades",
  },
  {
    name: "Monkey D. Luffy",
    bio: "He is gonna be the king of the pirates",
  },
  {
    name: "Sosuke Aizen",
    bio: "He is a manipulative man",
  },
];

function App() {
  return (
    <div className="container">
      <h1>List App</h1>



      <div className="cards">
        {console.log("this is working")}
        {cards.map((singelCard, index) =>{
          return(
            <article key={index}>

              <h2>{singelCard.name}</h2>
              <p>{singelCard.bio}</p>
            </article>
          )
        })}



      </div>
    </div>
  );
}

export default App;
