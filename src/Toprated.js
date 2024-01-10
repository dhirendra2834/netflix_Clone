import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import './index.css'
export default function Toprated() {
  return (
    <>
    <Navbar/>
          <div className="cardbox contain">
          <Card link="https://image.tmdb.org/t/p/original//q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"/>
          <Card link="https://image.tmdb.org/t/p/original//oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg"/>
          <Card link="https://image.tmdb.org/t/p/original//9NBBkdxH0TjQEBSN2AzeE1sgsF9.jpg"/>
          <Card link="https://image.tmdb.org/t/p/original//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"/>
          <Card link="https://image.tmdb.org/t/p/original//aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg"/>
          <Card link="https://image.tmdb.org/t/p/original//ktejodbcdCPXbMMdnpI9BUxW6O8.jpg"/>
       <Card link="https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg"/>
        <Card link="https://image.tmdb.org/t/p/original//3bhkrj58Vtu7enYsRolD1fZdja1.jpg"/>
          <Card link="https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"/>
          <Card link="https://image.tmdb.org/t/p/original//o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg"/>
        
          </div> 
    </>
  )
}
