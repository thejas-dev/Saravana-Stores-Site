import React from 'react'
import Mens1 from './mens/mens.jpg'
import Mens2 from './mens/mens2.jpg'
import Mens3 from './mens/mens3.jpg'
import Mens4 from './mens/mens4.jpg'
import Mens5 from './mens/mens5.jpg'

function Mens(){

	

return(
<div>
	<div className="section">
		<img src={Mens1} alt="..." className="img-fluid mt-3"/>
		<h2 className="main-heading text-center mt-3">Mens Wear Collections</h2>
		<div className="underline-mens mx-auto"></div>
		<div className="container">
			<div className="card shadow">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Mens2} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto text-center border-start" >
							<ul className="list ">
								<li className="list-item">Start the summer off right: catching waves and catching eyes. 👀 </li>
								<li className="list-item">Classic Elegant and Up-to-date Fashions For Today's Date</li>
								<li className="list-item">The New Trends In the Mens Wear Industry</li>
								<li className="list-item">Casual and Formal Shirts For All Sizes Starting From S to XXL</li>
								<li className="list-item">Our Mesmerizing Collections of Bespoke suits, Sherwanis, Indo-western comes right from the heart, since 1995</li>
								<li className="list-item">Bell-bottom Jeans, Low-rise pants, Slim-fit pants, Ripped Jeans, Jeggings Available</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">Men's Suit Styles</h2>
							<div className="mens-underline mx-auto"></div>
							<ul className="list">
								<li className="list-item">Slim, Modern and Classic Fit Suit</li>
								<li className="list-item">Shawl lapel</li>
								<li className="list-item">Single and Double Breasted Suit</li>
								<li className="list-item">Unstructured Blazer</li>
								<li className="list-item">Double Vent</li>
								<li className="list-item">Bussiness Class</li>
							</ul>
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Mens3} alt="..." className="img-fluid rounded"/>
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Mens4} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto border-start text-center">
							<h2 className="mens-heading">T-Shirt and Shirts</h2>
							<div className="mens-underline mx-auto"></div>
							<ul className="list">
								<li className="list-item">Look Perfect from Every Angle</li>
								<li className="list-item">Fit Cotton Shirts</li>
								<li className="list-item">Digital Printed Fancy Shirts</li>
								<li className="list-item">Unstructured Blazer</li>
								<li className="list-item">Premium Unstitched Fabric Shirts</li>
								<li className="list-item">Nizza Fashion Mens Printed Shirts</li>
							</ul>
						</div>
						
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">Trendy and Cool</h2>
							<div className="mens-underline w-25 mx-auto"></div>
							<ul className="list">
								<li className="list-item">Cool Looking and Stylish Shirts and Pants</li>
								<li className="list-item">PUBG T-Shirts</li>
								<li className="list-item">Linen Shirts and Pants</li>
								<li className="list-item">Chambray</li>
								<li className="list-item">Cuban Collar Costumes</li>
								<li className="list-item">Flannel Shirts</li>
							</ul>
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Mens5} alt="..." className="img-fluid rounded"/>
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


export default Mens;


