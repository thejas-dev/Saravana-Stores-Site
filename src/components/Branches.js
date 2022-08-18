import React,{useEffect} from 'react'
import Navbar from './Navbar-branch'
import Footer from './inc/Footer'
import alanBtn from "@alan-ai/alan-sdk-web"
import Tnagar1 from './images/t-nagar/index1.jpg'
import Tnagar2 from './images/t-nagar/index2.jpg'
import Tnagar3 from './images/t-nagar/index3.jpg'
import Pura1 from './images/pura/index1.jpg'
import Pura2 from './images/pura/index2.jpg'
import Pura3 from './images/pura/index3.jpg'
import Chrom1 from './images/chrompet/index.jpg'
import Chrom2 from './images/chrompet/index2.jpg'
import Chrom3 from './images/chrompet/index3.jpg'
import Selva1 from './images/selva/index.jpg'
import Selva2 from './images/selva/index2.jpg'
import Selva3 from './images/selva/index3.jpg'
import Selva4 from './images/selva/index4.jpg'
import Coim1 from './images/coim/index.jpg'
import Coim2 from './images/coim/index2.jpg'
import Coim3 from './images/coim/index3.jpg'
import Por1 from './images/porur/index.jpg'
import Por2 from './images/porur/index2.jpg'
import Por3 from './images/porur/index3.jpg'
import tiru1 from './images/tiru/index.jpg'
import tiru2 from './images/tiru/index2.jpg'
import tiru3 from './images/tiru/index3.jpg'
import Padi1 from './images/padi/index2.jpg'
import Padi2 from './images/padi/index.jpg'
import Padi3 from './images/padi/index3.jpg'
import Tnagar4 from './images/t-nagar/index4.jpg'
import '../App.css'


function Branches(){


	useEffect(()=>{

	alanBtn({
          key: process.env.REACT_APP_API_KEY,
          onCommand: (commandData) => {
            if (commandData.command === 'go:back') {
              // Call the client code that will react to the received command
            }
          },
        rootEl: document.getElementById("alan-btn"),
    });
},[])

return(
<div>
  <Navbar/>
	<div className="container margintop">
		<h2 className="main-heading mt-3 text-center">Our Main Branches</h2>
		<div className="underline-branch mx-auto"></div>
		<div className="row">
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={Tnagar3} class="d-block w-100" alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Tnagar4} class="d-block w-100" alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Tnagar2} class="d-block w-100" alt="..."/>
					    </div>
					     <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Tnagar1} class="d-block" style={{width:"113%"}} alt="..."/>
					    </div>
					  </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Stores T Nagar</b></h5>
				    <p class="card-text text-center">
				    	Established in the year 2003, Saravana Stores in T Nagar, Chennai is a top player in the 
						category Electronic Goods Showrooms in the Chennai.
				    	
				    </p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample">
					  <div class="card card-body">
					  	<p>
					  		Electronic Goods Showrooms, Mobile Phone Dealers, Home Appliance Dealers, AC Dealers,
					  		 Laptop Dealers, Second Hand AC Dealers, Bag Dealers, Second Hand Laptop Dealers and much more.
					  	</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	No.45, Ranganathan Street, T-Nagar,
							Chennai – 600 017.
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp;	044 24314242
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Electronic Goods Showrooms, Mobile Phone Dealers,Home Appliance Dealers, AC Dealers, Laptop Dealers,
						Second Hand AC Dealers, Bag Dealers, Second Hand Laptop Dealers, Second Hand Mobile Dealers, TV Dealers,
						Photos frame Dealers, refrigirator Dealers, led tv Dealers, modular kitchen dealers,water purifier dealers and more...
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	info@supersaravanastores.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://www.google.com/maps/dir//45,+Ranganathan+St,+Postal+Colony,+T+Nagar,+Chennai,+Tamil+Nadu+600017,+India/@13.0369542,80.2277907,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a5266ffb260a711:0xf911b1245285fe1c!2m2!1d80.2299794!2d13.0369542?hl=en-US" style={{textDecoration:'none',color:'green'}}>
							Show Location
						</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade2" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={Pura1} class="d-block w-100" alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Pura2} class="d-block" style={{width:"119%"}} alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Pura3} class="d-block" style={{width:"110%"}} alt="..."/>
					    </div>
					  </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Stores Purasawalkam</b></h5>
				    <p class="card-text text-center">
				    	Established in the year 2014, Saravana Stores in Purasawalkam, Chennai is a top player 
				    	in the category Home Furniture Dealers in the Chennai. 
				    	</p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample2">
					  <div class="card card-body">
					  	<p>
					  		This well-known establishment 
				    	acts as a one-stop destination servicing customers both local and from other parts of 
				    	Chennai.Home Appliance Dealers, Furniture Dealers, AC Dealers, Laptop Dealers, Second Hand AC Dealers, 
				    	Second Hand Laptop Dealers, Second Hand Mobile Phone Dealers, TV Dealers and much more.
				    	 Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Saravana Stores, 
				    	 Chennai.
					  	</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	No.10, Purasawalkam High Road,
							Chennai – 600 007.
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp;	044 2660 3777							
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Home Appliance Dealers, Home Furniture Dealers, Furniture Dealers, AC Dealers, Second Hand 
						 AC Dealers, Laptop Dealers, Second Hand refrigirator Dealers, Gaming Console Dealers, projector Dealers ,
						 office chair dealers, umbrella Dealers,camera Dealers, football Dealers, Second Hand tablet Dealers,
						 caller ID phone dealers-sony, VCR dealers-sony,Gaming Console battey charger Dealers and more...
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	info@supersaravanastores.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://www.google.co.in/maps/dir//Saravana+Stores,+Purasawalkam+High+Road,+Purasaiwakkam,+Chennai,+Tamil+Nadu/@13.0862574,80.221959,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a52640ade56a99f:0x6cec9119a5e7d3ab!2m2!1d80.2569787!2d13.0862598" style={{textDecoration:'none',color:'green'}}>
						Get Location</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade3" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={Chrom1} class="d-block" style={{width:"113%"}}  alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Chrom2} class="d-block" style={{width:"119%"}} alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Chrom3} class="d-block" style={{width:"130%"}} alt="..."/>
					    </div>
					  </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Stores Chrompet</b></h5>
				    <p class="card-text text-center">
				    	Established in the year 2014, Saravana Stores in Chromepet, Chennai is a top player in the category Egg 
				    	Tray Dealers in the Chennai. 
				    	</p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample3">
					  <div class="card card-body">
					  	<p>
					  		This well-known establishment acts as a one-stop destination servicing 
				    	customers both local and from other parts of Chennai. Over the course of its journey, this business 
				    	has established a firm foothold in it’s industry.Readymade Garment Retailers, Mobile Phone Dealers,
				    	 Home Appliance Dealers, Departmental Stores, AC Dealers, Shoe Dealers, Kids Readymade Garment Retailers,
				    	  Women Readymade Garment Retailers and much more.
					  	</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	No.159, GST Road, Chrompet,
							Chennai – 600 044.
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp;	044 4201 3777
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Readymade Garment Retailers, Mobile Phone Dealers, Home Appliance Dealers, Departmental Stores, AC Dealers,
						Shoe Dealers , Kids Readymade Garment Retailers,Women Readymade Garment Retailers, Saree Retailers, Men Readymade Garment Retailers,
						Fruit Vendors, Silk Saree Retailers, Vegetable Vendors, TV Dealers, Electronic Items, and more....
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	info@supersaravanastores.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://www.google.co.in/maps/dir//Saravana+Stores,+Chromepet,+Chennai,+Tamil+Nadu/@12.9558072,80.1084432,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a525e4ccf1b3981:0x26be7a6171ea21ab!2m2!1d80.1434629!2d12.9558095" style={{textDecoration:'none',color:'green'}}>
						Get Location</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade4" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={Por1} class="d-block" style={{width:"100%"}}  alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Por2} class="d-block" style={{height:"100%"}} alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Por3} class="d-block" style={{width:"100%"}} alt="..."/>
					    </div>
					  </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Stores Porur</b></h5>
				    <p class="card-text text-center">
				    	Saravana Stores in Porur, is a top player in the category of textiles
				    	in Porur. 	
				    	</p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample4">
					  <div class="card card-body">
					  	<p>
					  		This well-known establishment acts as a one-stop destination servicing 
				    	customers both local and from other parts of Chennai. Over the course of its journey, this business 
				    	has established a firm foothold in it’s industry.Readymade Garment Retailers, Mobile Phone Dealers,
				    	 Home Appliance Dealers, Departmental Stores, AC Dealers, Shoe Dealers, Kids Readymade Garment Retailers,
				    	  Women Readymade Garment Retailers and much more.
					  	</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	 No 106, Mount Poonamallee Road, Porur, Chennai - 600116, Opposite Adyar Anandha Bhavan 
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp;	044 24767777
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Readymade Garment Retailers,Departmental Stores, Women Readymade Garment Retailers, Men Readymade Garment Retailers, Kids Readymade Garment Retailers, Authorised Dealers.
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	info@supersaravanastores.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://www.google.com/maps/dir//13.032126,80.1639669/@13.032126,80.163967,16z?hl=en-US" style={{textDecoration:'none',color:'green'}}>
						Get Location</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade5" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={Selva1} class="d-block" style={{width:"117%"}}  alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Selva2} class="d-block" alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Selva3} class="d-block" style={{width:"100%"}} alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Selva4} class="d-block" style={{width:"100%"}} alt="..."/>
					    </div>
					  </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Selvarithanam Madurai</b></h5>
				    <p class="card-text text-center">
				    	Saravana Selvarithanam known to satisfactorily cater to the demands of its customer base. 	
				    </p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample5">
					  <div class="card card-body">
					  	<p>
					  		It is located near Lakshmanan Hospital,Thiruvalluvar Nagar.
				    	Customer centricity is at the core of Saravana Stores Saravana Selvarithanam Stores in Palanganatham in Madurai and it is a belief that has led the bussiness 
				    	to build long-term relationships.The bussiness strive to make for a positive experience through its offerings.Ensuring 
				    	a positive customer experience, making available goods and services that are of top-notch quality is given prime Importance.
					  	</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	No 72, Tirupparankundram Road, Palanganatham, Madurai - 625003, Near Lakshmanan Hospital, Thiruvalluvar Nagar.
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp; +914 452 2371981, 2372981
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Fabric Retailers.
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	care@saravanaonline.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://goo.gl/maps/RKq719SWNMZjNFbRA" style={{textDecoration:'none',color:'green'}}>
						Get Location</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade6" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={Coim1} class="d-block" style={{height:"123%"}}  alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Coim2} class="d-block" style={{width:"105%"}} alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Coim3} class="d-block" style={{width:"100%"}} alt="..."/>
					    </div>
				 </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Selvarithanam Coimbatore</b></h5>
				    <p class="card-text text-center">
				    		Saravana Selvarathinam in Oppanakara Street, Coimbatore is one 
				    		of the leading businesses in the Diamond Jewellery Showrooms.
				    	</p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample6">
					  <div class="card card-body">
					  	<p>It is Known to satisfactorily cater to the demands
				    		of its customer base. Customer centricity is at the core of saravana Selvarathinam. Ensuring a positive customer experience
				    		making goods available and services that are at top notch quality is given prime Importance.
				    	</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	No 195/5, Oppanakara Street, Coimbatore - 641001, Town Hall.
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp; 422 23037777, +91 8939800664, +91 8939800648, +91 8939800849, +91 8124460442.
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Jewelly Showroom, Gold Jewellery, Textiles, Jewellery Manufactures.
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	care@saravanaonline.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://goo.gl/maps/sBzXGvTwAqdXKPwn9" style={{textDecoration:'none',color:'green'}}>
						Get Location</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade7" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={tiru1} class="d-block" alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={tiru3} class="d-block" style={{width:"113%"}} alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={tiru2} class="d-block" style={{width:"100%"}} alt="..."/>
					    </div>
					  </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade7" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade7" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Selvarithanam Melapalayam</b></h5>
				    <p class="card-text text-center">
				      	 known to satisfactorily cater to the demands of its customer base.
				    </p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample7">
					  <div class="card card-body">
					  	<p>
					  		Customer centricity is at the core of saravana stores at Melapalayam, Tirunelveli. Ensuring a positive 
					  		customer experience and it is a belief the has led the bussiness to build long-term relationships.Ensuring 
					  		a positive customer experience, making available goods and services that are at the top-notch quality is given
					  		prime Importance.		
					  	</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	No 241, South By Pass Road, Melapalayam, Tirunelveli-627005(Veeramanickapuram).
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp; +91 462 297 0182.
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Home Appliance Dealers.
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	care@saravanaonline.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://goo.gl/maps/2VVMMUAAk6bS7Up76" style={{textDecoration:'none',color:'green'}}>
						Get Location</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
			<div className="col-md-6 mt-4">
				<div class="card shadow">
				  <div id="carouselExampleFade8" class="carousel slide carousel-fade branchimg" data-bs-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active slideimg" data-bs-interval="4000">
					      <img src={Padi1} class="d-block"  alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Padi2} class="d-block"  alt="..."/>
					    </div>
					    <div class="carousel-item slideimg" data-bs-interval="4000">
					      <img src={Padi3} class="d-block" alt="..."/>
					    </div>
					  </div>
					  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade8" data-bs-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Previous</span>
					  </button>
					  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade8" data-bs-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="visually-hidden">Next</span>
					  </button>
					</div>
				  <div class="card-body">
				    <h5 class="card-title text-center"><b>Saravana Stores Padi,Chennai</b></h5>
				    <p class="card-text text-center">
				    	Saravana Selvarithanam known to satisfactorily cater to the demands of its customer base. 	
				    </p>
				    <p className="text-center" >
					  <a class="btn btn-warning " data-bs-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false" aria-controls="collapseExample8">
					    More Information
					  </a>
					</p>
					<div class="collapse" id="collapseExample8">
					  <div class="card card-body">
					  	<p>
					  		The legend Saravana Stores Padi,Chennai is one of the leading bussiness in the Departmental 
					  		Stores
					  		</p>
					  	<p><i className="material-icons">near_me</i>
						&nbsp;	No 15, MTH Road, Padi, Chennai - 600050, Near Padi Bus Stand.
						</p>
						<p><i className="material-icons">phone_in_talk</i>
						&nbsp; +044 46536666
						</p>
						<p><i className="material-icons">schedule</i>
						&nbsp;	Monday-Saturday ~ 9.00am - 10.00pm
						</p>
						<p><i className="material-icons">category</i>
						&nbsp;	Readymade Garment Dealers,Departmental stores,ayurvedic medicinal shops,Kids Readymade Garment Retailers,
						Men Readymade Garment Retailers, Women Readymade Garment Retailers,Fabric Retailers,baby care producrts Retailers ,
						saree Retailers, cosmetic Retailers, and more.....
						</p>
						<p><i className="material-icons">email</i>
						&nbsp;	care@saravanaonline.com
						</p>
						<p><i className="material-icons">location_on</i>
						&nbsp;	<a href="https://goo.gl/maps/PQa16RJb71HVoZN86" style={{textDecoration:'none',color:'green'}}>
						Get Location</a>
						</p>

					  </div>
					</div>
				  </div>
				</div>
			</div>
		</div>

	</div>
	<br/>
  <Footer/>
</div>

	)

}


export default Branches;