import React, { useState } from 'react';
import starUnfilled from "./img/star-unfilled.png";
import starFilled from "./img/starFilled.png";

let arr = [1, 2, 3, 4, 5];

function App() {
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);

  const handleHoverOut = (e) => {
    setHoverRating(0);
  }

  return (
    <section>
      {arr.map((arrItem) => {
        console.log({arrItem, rating})
        return <img key={arrItem-1} onMouseEnter={() => setHoverRating(arrItem)} onClick={() => setRating(arrItem)}  onMouseLeave={handleHoverOut} src={(arrItem <= hoverRating) || (arrItem <= rating) ? starFilled : starUnfilled}></img>
      })}
      <div>
      </div>
    </section>
  )
}


export default App
