import React from 'react';


//using template string replace roboimage src with the id as ${props.username}
const Card = (props) => {
  const roboimage = 'https://robohash.org/'+props.username+'?100x100';
  // destructure so you dont need the props.
  // can destructure right in the card declaration
  const { name, email } = props;
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robot' src={roboimage} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card
