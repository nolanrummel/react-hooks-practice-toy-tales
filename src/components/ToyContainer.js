import React , {useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  const singleToy = toys.map(toy => 
    <ToyCard key={toy.id} toy={toy} />
    )
  return (
    <div id="toy-collection">{singleToy}</div>
  );
}

export default ToyContainer;
