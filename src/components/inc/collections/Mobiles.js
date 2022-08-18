import React from 'react'
import Mobiles1 from './mobiles/mobiles.jpg'
import Mobiles2 from './mobiles/mobiles2.jpg'
import Mobiles3 from './mobiles/mobiles3.jpg'
import Mobiles4 from './mobiles/mobiles4.jpg'
import Mobiles5 from './mobiles/watches5.jpg'
import Mobiles6 from './mobiles/mobiles6.jpg'

function Mobiles(){


return(

	<div>
	<div className="section">
		<center><img src={Mobiles1} alt="..." className="img-fluid mt-3 rounded img-thumbnail"/></center>
		<h2 className="main-heading text-center mt-3">Mobile Phones Collections</h2>
		<div className="underline-kids mx-auto"></div>
		<div className="container">
			<div className="card shadow">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Mobiles2} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto text-center border-start" >
							
								<li className="list-item">Un-leash a world of possibilities with Brand New Mobiles 👀 </li>
								<li className="list-item">Buy Any Xiaami Phones in September and Get Free Screeen Replacement </li>
								<li className="list-item">Fully Refurnished Mobiles and Second Hand Mobiles are also available</li>
								<li className="list-item">Every Friday 50% discount on Realme Mobiles(only from 9am-12pm)</li>
								<li className="list-item">Can Own Any Mobile Now With No-Cost EMI For Specific Brands</li>
								<li className="list-item">All 5G Models Including POCO F4 5G,OPPO K10 5G, One Plus 10T and Nord 2T 5G are Available</li>
							
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">Gadgets and Tablets</h2>
							<div className="mens-underline w-50 mx-auto"></div>
							
								<li className="list-item">Mini and Gaming Tablets</li>
								<li className="list-item">Apple's iPad</li>
								<li className="list-item">Customized Bussiness Tablets</li>
								<li className="list-item">SDD, Pendrives, Mouse, Keyboards</li>
								<li className="list-item">Amazon's Kindle Fire</li>
								<li className="list-item">Pivo Pod, Gazepod Pro, Air omni 6 in 1 Wireless Charger</li>
							
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Mobiles3} alt="..." className="img-fluid rounded"/>
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Mobiles4} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto border-start text-center">
							<h2 className="mens-heading mt-3">Brands Available</h2>
							<div className="mens-underline mx-auto"></div>
							
								<li className="list-item">Apple</li>
								<li className="list-item">Samsung</li>
								<li className="list-item">Infinix</li>
								<li className="list-item">Oppo and Poco</li>
								<li className="list-item">Redmi</li>
								<li className="list-item">Vivo</li>
								<li className="list-item">One Plus</li>
								<li className="list-item">ROG Mobiles and more...</li>	

						</div>
						
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">Smart Watches</h2>
							<div className="mens-underline w-50 mx-auto"></div>
							
								<li className="list-item">Apple Watch Series 4 - 7</li>
								<li className="list-item">M1 Bluetooth Smart Watch</li>
								<li className="list-item">Samsung Galazy Watch 4</li>
								<li className="list-item">Noise Colorfit Pulse Grands Smart Watch</li>
								<li className="list-item">Boat XTrend Smart Watch</li>
								<li className="list-item">Foossil Gen 5 Carlyle</li>
							
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Mobiles5} alt="..." className="img-fluid rounded"/>
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 border-start my-auto">
							<img src={Mobiles6} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading mt-3">Smart Bands</h2>
							<div className="bands-underline mx-auto"></div>
							
								<li className="list-item">MI Band 3</li>
								<li className="list-item">Realme Band 2</li>
								<li className="list-item">Redmi Smart Band Pro</li>
								<li className="list-item">OnePlus Band</li>
								<li className="list-item">Fitbit Charge 2</li>
								<li className="list-item">Garmin Vivosmart HR</li>
							
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
	<br/>
</div>



	)



}


export default Mobiles;