import alanBtn from "@alan-ai/alan-sdk-web";
import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './inc/Footer'
import Vmc from './inc/Vmc'
import Vlog from './inc/Vlog'
import Arulimg from './images/arul.jpeg'


function Home(){
	


function handleload(){
	var loader = document.getElementById("loadify")
		loader.classList.add("fadeout")
		var content = document.getElementById("overflow-hidden")
		content.classList.add("fadein")
}
useEffect(()=>{

	var alanBtnInstance =  alanBtn({
          key: process.env.REACT_APP_API_KEY,
          onCommand: (commandData) => {
            if (commandData.command === 'go:back') {
              // Call the client code that will react to the received command
            }
          },
          onButtonState: async function(status) {
            var greetingWasSaid = false;
            if (status === 'ONLINE') {
            if (!this.greetingWasSaid) {
            await alanBtnInstance.activate();
            alanBtnInstance.playText("Welcome To The Legend Saravana Stores , Do You Need Any Information?");
            this.greetingWasSaid = true
                }
            }
        },
        rootEl: document.getElementById("alan-btn"),
        left:"15px",
        bottom:'35px'
    });
},[])
   

	return(

<div>
	<div className="loadify" id="loadify">
	    <div></div>
	</div>	
	<div className="overflow-hidden" id="overflow-hidden">
	  <Navbar/>
	  <br/><br/><br/>
      <Slider/>
		<div>
			<section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h3 className='main-heading text-center mt-4 fw-bold'>The Saravana Stores</h3>
							<div className="underline mx-auto"></div>
						</div>
					</div>
					<div className="social-media" id="social-media">
						<div style={{listStyle:'none'}} className="mx-auto mb-5">
        				  
				          <li><span className="social-icon social-facebook"><a style={{textDecoration:'none',color:'#fff'}} href="https://www.facebook.com/supersaravanastores"><i className="fa fa-facebook"></i></a></span></li>
				          <li><span className="social-icon social-google mt-2"><a style={{textDecoration:'none',color:'#fff'}} href="https://www.instagram.com/supersaravanastores/"><i className="fa fa-youtube"></i></a></span></li>
				          <li><span className="social-icon social-instagram mt-2"><a style={{textDecoration:'none',color:'#fff'}} href="https://www.instagram.com/supersaravanastores/"><i className="fa fa-instagram"></i></a></span></li>
				          <li><span className="social-icon social-twitter mt-2"><a style={{textDecoration:'none',color:'#fff'}} href="https://twitter.com/saravanastorein"><i className="fa fa-twitter"></i></a></span></li>
				          <li><span className="social-icon social-whatsapp mt-2"><a style={{textDecoration:'none',color:'#fff'}} href="https://wa.me/917824060777?text=hello"><i className="fa fa-whatsapp"></i></a></span></li>
				          <li><span onClick={(event)=>{
				          	document.getElementById("social-media").style.right="-50px";
				          	document.getElementById("social-media").style.opacity="0";
				          }} className="material-icons cancel text-dark mt-2 ms-2" >cancel</span></li>

				      </div>
					</div>
					<div className="row mt-4">
						<div className="col-md-8">
							<p className="info-text">
								The story of serving customers by providing them with what they want at an unbelievably affordable price started as a small textile shop on 45,
								 Ranganathan Street, Since 1969, now it is a textile showroom par excellence that the whole of Chennai can 
								 be proud of. A success story made from hard work, sound business practices, and dynamism, guided by a management vision. 
								By the continuing patronage of people, Saravana Stores is now a fantasy land of shopping located at T. Nagar, 
								Purasawalkam, Chrompet, and Porur. A fairy tale is woven in fabrics of love, quality, elegance, and 
								allure that have captured the love and fantasy of its loyal clientele over the past few decades. Walk-in 
								for a really pleasurable shopping experience. Saravana Stores is partially a paradise of textiles with an
								 unbeatable range of clothing, garments, and accessories that can satisfy the needs of everyone in the 
								family at unbelievable prices. Choose from a huge variety of Gold, Diamond Jewellery and Silver articles, 
								Chudidhars, Silk Sarees, Wedding Collections, Gaghras, Lehangas, designer sarees, Blouses, Ladies readymades, 
								Menswear, Suiting Shirting, kids wear, infant wear and accessories, furnishing, toys, sports, stationery, gift
								 articles, electronics, vessels, home appliances, luggage, footwear, furniture, Watches, Mobiles, 
								Footwear, Groceries, Home needs, Opticals, Sunglasses, Imitation Jewelry, Cosmetics or 
								Perfumes. Whatever is on your shopping list, Saravana Stores has an answer. Awaiting your choice 
								at the shelves is a large number of leading brands, fashionable patterns, and designer stuff
							</p>
						</div>
						<div className="col-md-4 text-center">
							<img className="rounded img-fluid img-thumbnail" onLoad={handleload} src={Arulimg}  alt="..." />
							<span className="owner">Arul Saravana</span>
							<p className="owner-text">Owner Of Saravana Stores</p>

						</div>
					</div>
				</div>
			</section>
		</div>
		<Vmc/>

		<Vlog/>
		<br/>
	  <Footer/>
	</div>
</div>
	)

  
}

export default Home;