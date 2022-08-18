import React , {useState,useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from '../Navbar-feedback'
import Footer from './Footer'
import Header from '../images/index3.svg'


function Feedback(){

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
	const [option,setOption] = useState('Feedback')

function submit(){
	
	let box = document.getElementById('alert')
	box.classList.add("fadein2")
	document.getElementById("options").style.display = "none"
	setName('')
	setEmail('')
	setFeedback('')
	setInterval(()=>{
		box.classList.add("fadeout2")
		document.getElementById("options").style.display = "block"
		setOption('')
	},6000)
	setInterval(()=>{
		box.style.display = "none"
		box.classList.remove("fadein2")
		box.classList.remove("fadeout2")
		document.location.reload()
	},7000)

}

return(

<div>
	<Navbar/>
		<div className="container margintop-feedback text-center">
			<img src={Header} className="img-fluid" alt="..."/>
		</div>
		<section className="section">
			<div className="container mt-3">
						<div className="card shadow">
							<div className="card-body">
								<div className="row">
									<div className="col-md-6">
										<h6>Report Or Feedback Form</h6>
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
										<div className="form-group mt-3">
											<label className="mb-1">Email Address</label>
											<input type="email" className="form-control"
											onChange= {(event)=>{
												setEmail(event.target.value)
											}}
											value={email}
											placeholder="Enter Your Email"/>
										</div>
										<div className="mt-3" id="options">
											<div class="form-check">
											  <input class="form-check-input" type="radio" value="Report" id="option" name="flexRadioDefault" 
											  onChange={(event)=>{
											  	setOption(event.target.value)
											  }}
											  // eslint-disable-next-line
											  id="flexRadioDefault1"/>
											  <label class="form-check-label" for="flexRadioDefault1">
											    Report
											  </label>
											</div>
											<div class="form-check">
											  <input class="form-check-input" type="radio" value="Feedback" id="option" name="flexRadioDefault" 
											  onChange={(event)=>{
											  	setOption(event.target.value)
											  	
											  }}
											  // eslint-disable-next-line
											  id="flexRadioDefault2"/>
											  <label class="form-check-label" for="flexRadioDefault2">
											    Feedback
											  </label>
											</div>
										</div>
										<div className="form-group mt-3">
											<label className="mb-1">Message</label>
											<textarea rows="4" className="form-control"
											onChange={(event)=>{
												setFeedback(event.target.value)
											}}
											value={feedback}
											placeholder="Write Your Feedback or Report Here.."/>
										</div>
										<div class="alert alert-success mt-3" id="alert" role="alert">
										  <h4 class="alert-heading">Thank You!</h4>
										  <p>Your {option} has been recorded and response mail will be sent to your Email Within 24 hours.</p>
										</div>
										<div className="form-group py-4">
											<button type="submit" onClick={submit} className="btn btn-primary w-100 shadow">Submit</button>
										</div>
									</div>
									<div className="col-md-6 border-start">
										<div className="row">
											<div className="col-md-12">
												<h2 className="main-heading text-center mt-3">About This Form</h2>
												<p>We are providing this request or Feedback form for customers to ensure
												that our Customer are having a Positive and satisfied experience with our service.
												It also helps us to imporve our company's services.The goal is to gain a good user experience
												and help with the problems of customers.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

		</section>
		<br/>
		<div className="mt-2"></div>
	<Footer/>

</div>

	)

}

export default Feedback;