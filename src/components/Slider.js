import React from 'react'
import Image1 from './images/index2.jpeg'
import Image2 from './images/index.jpeg'
import Image3 from './images/index3.jpeg'
import Image4 from './images/index4.jpeg'
import Image5 from './images/index5.jpeg'


function Slider()
{

	return(
	
	<div id="carouselExampleIndicators" class="carousel slide w-100 mt-3" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Image3} class="d-block w-100" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src={Image4} class="d-block w-100" alt="..."/>
    </div>
     <div class="carousel-item" style={{bottom:'20px'}}>
      <img src={Image5} class="d-block w-100"   alt="..."/>
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
</div>
		)

}

export default Slider;