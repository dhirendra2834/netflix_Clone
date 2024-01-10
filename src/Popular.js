import React from 'react'
import Card from './Card'
import './index.css'

export default function Popular() {
  
  return (
    <>
         <div className="cardbox">
      <Card  link="https://image.tmdb.org/t/p/original//ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"  mname="movie-1"/>
      <Card  link="https://image.tmdb.org/t/p/original//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"  mname="movie-2"/>
      <Card  link="https://image.tmdb.org/t/p/original//2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg"  mname="movie-3"/>
      <Card  link="https://image.tmdb.org/t/p/original//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"  mname="movie-4"/>
      <Card  link="https://image.tmdb.org/t/p/original//7yyFEsuaLGTPul5UkHc5BhXnQ0k.jpg" />
      <Card  link="https://image.tmdb.org/t/p/original//s1VzVhXlqsevi8zeCMG9A16nEUf.jpg"/>
      <Card  link="https://image.tmdb.org/t/p/original//nGwFsB6EXUCr21wzPgtP5juZPSv.jpg"/> 
      <Card  link="https://image.tmdb.org/t/p/original//uDsvma9dAwnDPVuCFi99YpWvBk0.jpg"/> 
      <Card  link="https://image.tmdb.org/t/p/original//9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg" />
      <Card  link="https://image.tmdb.org/t/p/original//kuf6dutpsT0vSVehic3EZIqkOBt.jpg"/> 
    
    </div>
    </>
  )
}
