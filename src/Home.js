import React from 'react'
import './index.css'
import Navbar from './Navbar';
import Carosuel from './Carosuel';
import Popular from './Popular'

 
export default function Home() {
  return (
    <>
 <div ><Navbar/></div>
  <div><Carosuel/></div>
  <div class='contain'>
  <h1 class="movietype">POPLUAR MOVIES :</h1>
   <div><Popular/></div>
  
  </div>
    </>
  )
}
