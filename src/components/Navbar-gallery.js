import React from 'react'
import Navimg from './images/navimg.png'
import Navheader from './images/nav-header.png'



function Navbar(){

   var ass = false
  function handletips(){
    let ele = document.getElementById('assistant');
    if(!ass){
      ele.classList.add("assist");
      ass  =true;
      console.log("true")
    }else{
      ele.classList.remove("assist");
      ass=false;
      console.log("false")
    }
  }



return(
	
	  <nav class="navbar bg-light fixed-top">
  <div class="container-fluid">
  <div className="img-container">
    <img src={Navimg} className="navimg" alt="..." />
   </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <img src={Navheader} className="navimg" alt="..." />
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a href="/" className='nav-link'>Home</a>
          </li>
          <li class="nav-item">
            <a href="/branches" className='nav-link'>Our Branches</a>
          </li>
          <li class="nav-item">
            <a href="/home/collections" className='nav-link'>Collections</a>
          </li>
          <li class="nav-item">
            <a href="/home/gallery" className='nav-link active'>Gallery</a>
          </li>
          <li class="nav-item">
            <a href="/about" className='nav-link'>About Us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contact us
            </a>
            <ul class="dropdown-menu">
              <li><a href="/contact" className="dropdown-item">Customers Request</a></li>
              <li><a class="dropdown-item" href="/feedback">Report or Feedback</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="mailto:info@saravanastores.com">Send Us Email</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" onClick={handletips} className='nav-link dropdown-toggle'>Voice Assistant Tips</a>
          </li>
          
          <div class="alert alert-success" id="assistant" role="alert">
            <center><h5>Tap On The Mic icon to Talk</h5></center>
            <h4 class="alert-heading">Try Asking:-</h4>
            <p>Give Me Some Motivation.</p>
            <p>Tell Me About saravana stores.</p>
            <p>what is the weather in Chennai.</p>
            <p>What is the revenue of saravana stores.</p>
            <p>Who is the founder of saravana stores.</p>
            <p>Tell me about Jamaii Icecreams.</p>
            <p>Where are the branches of saravana stores</p>
            <p className="mb-0" >I need to report/Feedback.</p>
          </div>
        </ul>
        <form class="d-flex mt-2" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="button">Search</button>
        </form>
      </div>
      <div style={{listStyle:'none',display:'flex'}} className="mx-auto mb-5">
        
          <li><span className="social-icon social-facebook"><a style={{textDecoration:'none',color:'#fff'}} href="https://www.facebook.com/supersaravanastores"><i className="fa fa-facebook"></i></a></span></li>
          <li><span className="social-icon social-google"><a style={{textDecoration:'none',color:'#fff'}} href="https://www.instagram.com/supersaravanastores/"><i className="fa fa-youtube"></i></a></span></li>
          <li><span className="social-icon social-instagram"><a style={{textDecoration:'none',color:'#fff'}} href="https://www.instagram.com/supersaravanastores/"><i className="fa fa-instagram"></i></a></span></li>
          <li><span className="social-icon social-twitter"><a style={{textDecoration:'none',color:'#fff'}} href="https://twitter.com/saravanastorein"><i className="fa fa-twitter"></i></a></span></li>
          <li><span className="social-icon social-whatsapp"><a style={{textDecoration:'none',color:'#fff'}} href="https://wa.me/917824060777?text=hello"><i className="fa fa-whatsapp"></i></a></span></li>
        
      </div>
    </div>
  </div>
</nav>



	)


}


export default Navbar;
