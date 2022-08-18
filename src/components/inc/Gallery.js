import Navbar from '../Navbar-gallery'
import Footer from './Footer'
import React,{useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import Legend1 from './legend/legend.jpg'
import Legend2 from './legend/legend2.jpg'
import Legend3 from './legend/legend3.jpg'
import Legend4 from './legend/legend4.jpg'
import Legend5 from './legend/legend5.jpg'
import Legend6 from './legend/legend6.jpg'
import Legend7 from './legend/legend7.jpg'
import Legend8 from './legend/legend8.jpg'
import Legend9 from './legend/legend9.jpg'
import Legend10 from './legend/legend10.jpg'
import Legend11 from './legend/legend11.jpg'
import Legend12 from './legend/legend12.jpg'
import Inaug1 from './inaug/inaug.jpg'
import Inaug2 from './inaug/inaug1.jpg'
import Inaug3 from './inaug/inaug2.jpg'
import Inaug4 from './inaug/inaug3.jpg'
import Inaug5 from './inaug/inaug4.jpg'
import Inaug6 from './inaug/inaug5.jpg'
import Inaug7 from './inaug/inaug6.jpg'
import Inaug8 from './inaug/inaug7.jpg'
import Inaug9 from './inaug/inaug8.jpg'
import Inaug10 from './inaug/inaug9.jpg'
import Inaug11 from './inaug/inaug10.jpg'
import Inaug12 from './inaug/inaug12.jpg'



function Gallery(){

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
			<section className="section">
				<div className="container margintop">
					<div className="row">
						<div className="col-md-12">
							<div className="card shadow">
								<div className="card-body">

									<h2 className="gallery-heading text-center">The Legend Movie</h2>
									<div className="mx-auto gallery-underline"></div>
									<div className="row">
										<div className="col-md-6">
											<img src={Legend1} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Legend2} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Legend3} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Legend4} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Legend5} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Legend6} alt="..." className="img-fluid rounded hover img-thumbnail"/>
										</div>
										<div className="col-md-6">
											<img src={Legend7} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Legend8} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Legend9} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Legend10} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Legend11} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Legend12} alt="..." className="img-fluid rounded hover img-thumbnail"/>
										</div>

									</div>
									<p className="mt-3">The Legend is a 2022 Tamil Action Flim Written and Directed by J.D.Jerry.
									Owner of Saravana Stores Saravanan Arul played the role of Hero in this flim. </p>
								</div>
							</div>
						</div>
						
					</div>
					<div className="row mt-4">
						<div className="col-md-12">
							<div className="card shadow">
								<div className="card-body">

									<h2 className="gallery-heading text-center">Inaugration function -- Padi Showroom</h2>
									<div className="mx-auto gallery-underline w-50"></div>
									<div className="row">
										<div className="col-md-6">
											<img src={Inaug1} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Inaug2} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Inaug3} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Inaug4} alt="..." className="img-fluid hover rounded img-thumbnail"/>
											<img src={Inaug5} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Inaug6} alt="..." className="img-fluid rounded hover img-thumbnail"/>
										</div>
										<div className="col-md-6">
											<img src={Inaug7} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Inaug8} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Inaug9} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Inaug10} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Inaug11} alt="..." className="img-fluid rounded hover img-thumbnail"/>
											<img src={Inaug12} alt="..." className="img-fluid rounded hover img-thumbnail"/>
										</div>

									</div>
									<p className="mt-3">The Legend New Saravana Stores - Padi Showroom Inaugration function
									is attended by Many Celebrities including Actor Tamanna, Jayam ravi, Hansika, 
									Shreya, Madhavan are Participated.</p>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</section>
			<br/><br/>
		<Footer/>
	</div>
		)
}


export default Gallery;