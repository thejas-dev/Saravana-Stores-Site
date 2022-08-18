import alanBtn from "@alan-ai/alan-sdk-web";
import React,{useEffect} from 'react'
import Footer from './inc/Footer'
import Navbar from './Navbar-about'
import Founder from './images/Founder.jpeg'
import Founder2 from './images/Founder.jpg'
import Icecreams from './images/Icecream.jpg'


function About(){

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
			
<div >
	<Navbar/>
		<section className="section">
			<div className="heading-about margintop text-center"><h2 className="heading-about">About</h2></div>
			<div className="underline mx-auto w-25"></div>
					<div className="container mt-3">
						<div className="card shadow">
							<div className="card-body">
								<div className="row">
									<figure class="figure text-center">
									  <img src={Founder} class="figure-img shadow img-fluid rounded" alt="..."/>
									  <figcaption class="figure-caption fw-bold mt-2">Founder of Saravana Stores - Selvarathinam Nadar</figcaption>
									</figure>
								</div>
								<div className="row">
									<div className="col-md-8">
										<h3>History</h3>
										Saravana Stores, founded in 1969 by S. Selvarathinam Nadar Son of Shanmuga Sundaram Nadar, is a chain of retail stores in India. Saravana Stores is the largest family owned business retail chain
										in India.According to Kishore Biyani of Big Bazaar, Saravana Stores is India's No. 1 retail store in one locality. Headquarters in Chennai, Tamilnadu, India.
										<br/><hr/>
										<h3>Branches</h3>
										Saravana Stores operates seven stores in Chennai, at T. Nagar, Purasawalkam, Porur, Padi, 
										Sholinganallur, Chromepet and Usman Road. Our company has mega stores in Madurai, Tirunelveli
										and Coimbatore. As Our company is growing rapidly we are having plans to open stores in Mumbai, New Delhi, 
										and Bengaluru. Our company also operates the Saravana Selvarathinam Stores, in Tirunelveli and 
										Madurai
										<hr/>
										<h3>Revenue</h3>
										In 2008, we reported an annual turnover of about ₹6.50 billion (200 million US dollars).<br/>
										The current revenue is ₹60.16 billion(US$750 million)

									</div>
									<div className="col-md-4">
										<img src={Founder2} alt="..." className="shadow rounded img-fluid mt-2"/>
									</div>	
								</div>
							</div>
						</div>
						<div className="card shadow mt-4">
							<div className="card-body">
								<div className="text-center" >
									<img src={Icecreams} alt="..." className="img-fluid shadow rounded img-thumbnail"/>
								</div>
								<div className="col-md-12">
									<h3 className="mt-3">Jamaai Icecreams</h3>
									<p>In 2004, Saravana Stores Group launched a new ice cream brand named Jamaai, a 
									100% milk based ice-cream brand. The factory is located at Padappai, a suburb of 
									Chennai en route Sriperumbudur and sold across Tamil Nadu. It has a capacity of 
									10,000-litres per day ice cream production and expected to expand to 30,000 litres
									per day.</p>
								</div>
							</div>
						</div>
						<div className="card shadow mt-4">
							<div className="card-body">
								<h3>Our Main Websites</h3>
								<div className="row">
									<div className="col-md-12">
										<ul>
											<li className="list-item mt-2"><a className="links" href="https://saravanaonline.com/">Saravana Selvarathinam</a></li>
											<li className="list-item mt-2"><a className="links" href="https://supersaravanastores.com/">Super Saravana Stores</a></li>
											<li className="list-item mt-2"><a className="links" href="https://www.saravanastores.in/">Saravana Super Store Elite</a></li>
											<li className="list-item mt-2"><a className="links" href="http://saravanastoreslegend.co.in/">The Legend New Saravana Stores</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</section>
				
		<br/>
	<Footer/>
</div>
		);


}

export default About;