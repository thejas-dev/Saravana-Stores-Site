import React from 'react'
import Kids1 from './kids/kids.jpg'
import Kids2 from './kids/kids2.jpg'
import Kids3 from './kids/kids3.jpg'
import Kids4 from './kids/kids4.jpg'
import Kids5 from './kids/kids5.jpg'

function Kids(){


return(

<div>
	<div className="section">
		<center><img src={Kids1} alt="..." className="img-fluid mt-3 rounded img-thumbnail"/></center>
		<h2 className="main-heading text-center mt-3">Kids Wear Collections</h2>
		<div className="underline-kids mx-auto"></div>
		<div className="container">
			<div className="card shadow">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Kids2} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto text-center border-start" >
							
								<li className="list-item">Give Your Child a Smile With Amazing Attire👀 </li>
								<li className="list-item">Superminis Boy's Cotton Kurta Dhoti with Golden Thread Work, Round Collar, Full Sleeves, Side Button Kurta Set for Ethnic Wear </li>
								<li className="list-item">ULTRA TREND Girl's A-Line Knee Length Dress is Available</li>
								<li className="list-item">Boys Navy Polka Dot Printed Top and Pants</li>
								<li className="list-item">Baby Girls Frocks Dress and Boys Synthetic Kurta Pyjama Set</li>
								<li className="list-item">Girl's Satin Readymade Lehenga Choli</li>
							
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">On Trends</h2>
							<div className="mens-underline w-25 mx-auto"></div>
							
								<li className="list-item">Kids Boy Blue Faded Demin Jeans</li>
								<li className="list-item">Girl's Denim Casual Joggers/Jeans</li>
								<li className="list-item">Chanderi Sarees</li>
								<li className="list-item">Strtchable Boys Casual Cotton Jeans</li>
								<li className="list-item">Benkils</li>
								<li className="list-item">Naughty Ninos</li>
							
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Kids3} alt="..." className="img-fluid rounded"/>
						</div>
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto">
							<img src={Kids5} alt="..." className="img-fluid rounded"/>
						</div>
						<div className="col-md-6 my-auto border-start text-center">
							<h2 className="mens-heading mt-3">Traditional</h2>
							<div className="mens-underline w-25 mx-auto"></div>
							
								<li className="list-item">Boys Dhoti Suits</li>
								<li className="list-item">Girls Gowns and Sarees</li>
								<li className="list-item">Girls Salwar Suits</li>
								<li className="list-item">Embroidered Georgette Lehenga</li>
								<li className="list-item">Waistcoats</li>
								<li className="list-item">Indo Western Dresses</li>
								<li className="list-item">Silk Mundu Shirt Set</li>
								<li className="list-item">Printed Cotton Kurta Set</li>
								<li className="list-item">Woven Art Silk Jacquard Kurta Pajama Set </li>
								<li className="list-item">Contrast Yoke Velvet Anarkali Suit</li>	

						</div>
						
					</div>
				</div>
			</div>
			<div className="card shadow mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-6 my-auto text-center">
							<h2 className="mens-heading">Formal and Casual</h2>
							<div className="mens-underline w-50 mx-auto"></div>
							
								<li className="list-item">Jeggings</li>
								<li className="list-item">Nehru Jackets</li>
								<li className="list-item">Girls Cotton Top with Palazzos</li>
								<li className="list-item">Sherwani</li>
								<li className="list-item">Leggings</li>
								<li className="list-item">Kurtas</li>
							
						</div>
						<div className="col-md-6 border-start my-auto">
							<img src={Kids4} alt="..." className="img-fluid rounded"/>
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


export default Kids;