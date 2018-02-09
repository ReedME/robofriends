import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (!robots.length){
    return (
      <div>
        <h1> LOADING . . . </h1>
      </div>
    );
  }
    
  return (
    <div>
      {robots.map(user => (
         <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      ))}
    </div>
  );
}
export default CardList
