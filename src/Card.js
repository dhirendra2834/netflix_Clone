import React from 'react';

let  dhname;

dhname="Dhirendra Singh";
export default function Card(props) {
  console.log(dhname);
  
  // function Reaction() {

  //   window.open('/Reactionclick', '_blank');
  // }


  return (
    <div class="card" >

      <img src={props.link} alt="dark web series pic" id="img" />
      <div>
        <button style={{ margin: 'center', width: '100%', color: 'green', fontWeight: '900', fontSize: '30px', border: '0px' }}>Watch Now</button>
      </div>

    </div>
  )
}



export {dhname};