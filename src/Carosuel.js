import React from 'react'

export default function carousel() {
  return (
    <div><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
     
      <div class="carousel-item">
        <img src="https://image.tmdb.org/t/p/original//nDxJJyA5giRhXx96q1sWbOUjMBI.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/778dca26c7efef302e6ed5f40ff80b9f219cd29138c487705ab8059d57b0cb1f._RI_SX1920_FMwebp_.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item active">
        <img src="https://dnm.nflximg.net/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd54xTdPUj0AvEYNwGWVbxjOHhmdtOl3rOkLbTlqq37rVtOPg18WrGRqflBBEKpOe59UxhT6M-mUte5S_J4OrLuTYIfXBKqk7DsLj9YSx-Wx2wXg2iy89YRUJp6qK7_bT_WVXA.jpg?r=acf" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
