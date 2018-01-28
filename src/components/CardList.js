import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardArray = robots.map((user, i) => {

    return (<Card
      key={robots[i].id}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
      username={robots[i].username}
            />
          );
  })
  if (!robots.length){
    return(
    <div>
      <h1> LOADING . . . </h1>
    </div>
  );
  } else {
  return(
    <div>
      {cardArray}
    </div>
  );
}
}
export default CardList
