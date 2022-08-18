import React from 'react'
import {Link} from 'react-router-dom'

function Footer(){



	return(
		<div>
			<section className="section footer bg-dark text-white">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h6 className="mt-4 fw-bold">Our Company Information</h6>
							<hr/>
							<p className="text-white mb-1" >
								Saravana Stores Retail Private Limited is a Non-govt company,
								incorporated on 09 May, 2007. A private unlisted company and is
								classified as 'company limited by shares'.
							</p>	
						</div>
						<div className="col-md-4">
							<h6 className="mt-4 fw-bold">Quick Links</h6>
							<hr/>
							<div><Link to="/"  className="text-white mb-1" style={{textDecoration:"none"}} >Home</Link></div>
							<div><Link to="/branches"  className="text-white mb-1" style={{textDecoration:"none"}}>Our Branches</Link></div>
							<div><Link to="/home/collections"  className="text-white mb-1" style={{textDecoration:"none"}}>Collections</Link></div>
							<div><Link to="/home/gallery"  className="text-white mb-1" style={{textDecoration:"none"}}>Gallery</Link></div>
							<div><Link to="/about"  className="text-white mb-1" style={{textDecoration:"none"}}>About</Link></div>
							<div class="dropdown">
							  <span class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							    Contact
							  </span>
							  <ul class="dropdown-menu">
							  	<div><Link to="/contact" className="text-dark mb-1 dropdown-item" style={{textDecoration:"none"}}>Customers Request</Link></div>
							    <div><Link to="/feedback" className="text-dark mb-1 dropdown-item" style={{textDecoration:"none"}}>Feedback or Report</Link></div>
							  	<div><hr className="dropdown-divider"/></div>
							  	<div><a href="mailto:info@saravanastores.com" className="text-dark mb-1 dropdown-item" style={{textDecoration:"none"}}>Send Us Email</a></div>
							  </ul>
							</div>
							
							
								
						</div>
						<div className="col-md-4">

							<h6 className="mt-4 fw-bold">Address</h6>
							<hr/>
							<div><p className="text-white mb-1">NO. 14 , RANGANATHAN STREET T NAGAR , CHENNAI TN 600017 IN</p></div>
						</div>
					</div>
				</div>

			</section>

		</div>



		)
}


export default Footer;