import React , {useState, useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from './Navbar-contact'
import Footer from './inc/Footer'
import Header from './images/index3.svg'

function Contact(){

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


	const [name,setName] = useState('') 
	const [feedback,setFeedback] = useState('')
	const [email,setEmail] = useState('')
	const [number,setNumber] = useState('')

function submit(){
	
	let box = document.getElementById('alert')
	box.classList.add("fadein2")
	console.log(name, feedback, number, email)
	
	setName('')
	setEmail('')
	setFeedback('')
	setNumber('')
	setInterval(()=>{
		box.classList.add("fadeout2")
		
	},6000)
	setInterval(()=>{
		box.style.display="none"
		document.location.reload()
	},7000)
	
}


	return(
			<div>	
				<Navbar/>
				<div className="container margintop-feedback text-center">
					<img src={Header} className="img-fluid" alt="..."/>
				</div>
				<section className="section mt-3">
					<div className="container">
						<div className="card shadow">
							<div className="card-body">
								<div className="row">
									<div className="col-md-6">
										<h6>Request Form</h6>
										<hr/>
										<div className="form-group">
											<label className="mb-1">Full Name</label>
											<input type="text" className="form-control"
											onChange={(event)=>{
												setName(event.target.value)
											}}
											value={name}
											placeholder="Enter Full Name"/>
										</div>
										<div className="form-group mt-2">
											<label className="mb-1">Mobile Number</label>
											<input type="text" className="form-control" 
											value={number}
											onChange={(event)=>{
												setNumber(event.target.value)
											}}
											placeholder="Enter Mobile Number"/>
										</div>
										<div className="form-group mt-2">
											<label className="mb-1">Email Address</label>
											<input type="email" className="form-control" 
											onChange= {(event)=>{
												setEmail(event.target.value)
											}}
											value={email}
											placeholder="Enter Address"/>
										</div>
										<div className="form-group mt-2">
											<label className="mb-1">Message</label>
											<textarea rows="3" className="form-control" 
											onChange={(event)=>{
												setFeedback(event.target.value)
											}}
											value={feedback}
											placeholder="Write Your Request Here.."/>
										</div>
										<div class="alert alert-success mt-3" id="alert" role="alert">
										  <h4 class="alert-heading">Thank You!</h4>
										  <p>Your Request has been Submitted Successfully our team members will Try to Resolve Your Request.</p>
										</div>
										<div className="form-group py-4">
											<button type="submit" onClick={submit} className="btn btn-primary w-100 shadow">Send Message</button>
										</div>
									</div>
									<div className="col-md-6 border-start">
										<h6 className="main-heading text-center">Address Information</h6>
										<div className="underline w-100"></div>
										<p>
											NO. 14 RANGANATHAN STREET T NAGAR CHENNAI TN 600017 IN. 
										</p>
										<p>
											Phone :- +91 7823923777
										</p>
										<p>
											Email :- info@saravanastores.com
										</p>

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

export default Contact;