import React from 'react'
import Womens1 from './womens/womens.jpg'
import Womens2 from './womens/womens1.jpg'
import Womens3 from './womens/womens2.jpg'
import Womens4 from './womens/womens3.jpg'
import Womens5 from './womens/womens4.jpg'


function Womens(){


return(

<div>
	<div className="section">
		<img src={Womens1} alt="..." className="img-fluid mt-3"/>
		<h2 className="main-heading text-center mt-3">Womens Wear Collections</h2>
		<div className="underline-mens mx-auto"></div>
		<div className="container">
			<div className="card shadow">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Womens3} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto text-center border-start" >
							
								<li className="list-item">Nothing makes an Indian girl look as beautiful as a saree does 👀 </li>
								<li className="list-item">Traditional Sarees With 40% off and 1+2 Offer Available</li>
								<li className="list-item">Chudidar, Tops, Lehanga, Oddiyanam, Vanki, Thodu, Mangamalai, Thodu are Available</li>
								<li className="list-item">The New Trends In the Womens Wear Industry</li>
								<li className="list-item">Culotte dress,Babydoll dress,Wrap around dress,Kimono dress,Tutu Dress,Polo Dress.</li>
								<li className="list-item">Our Brand New Collections of Jeggings, Bootcut Jeans, Flare Jeans, High-waist Jeans, Skinny Jeans are Available.</li>
							
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">Traditional Sarees</h2>
							<div className="mens-underline w-50 mx-auto"></div>
							
								<li className="list-item"><span>Kanjeevaram Sarees</span></li>
								<li className="list-item">Navurai Sarees</li>
								<li className="list-item">Chanderi Sarees</li>
								<li className="list-item">Silk Sarees</li>
								<li className="list-item">Kasavu Sarees</li>
								<li className="list-item">Synthetic Fibre Sarees</li>
							
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Womens2} alt="..." className="img-fluid rounded"/>
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Womens5} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto border-start text-center">
							<h2 className="mens-heading mt-2">Jeans and Pants</h2>
							<div className="mens-underline mx-auto"></div>
							
								<li className="list-item">Skinny Jeans</li>
								<li className="list-item">Flare Jeans</li>
								<li className="list-item">Low Raise Jeans</li>
								<li className="list-item">Ripped Jeans</li>
								<li className="list-item">Culottes</li>
								<li className="list-item">Stirrup Pants</li>
							
						</div>
						
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">Trendy and Cool</h2>
							<div className="mens-underline w-50 mx-auto"></div>
							
								<li className="list-item">Night Suit Red Micky Mouse</li>
								<li className="list-item">Malai Maxi dress</li>
								<li className="list-item">Ghazi Fabric</li>
								<li className="list-item">Printed Tops</li>
								<li className="list-item">Frock Gold Printed</li>
								<li className="list-item">Stiched Kurta plus Trouser</li>
							
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Womens4} alt="..." className="img-fluid rounded"/>
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


export default Womens;