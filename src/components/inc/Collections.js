import React,{useEffect} from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import Navbar from '../Navbar-collection'
import Footer from './Footer'
import Mens from './collections/Mens'
import Womens from './collections/Womens'
import Kids from './collections/Kids'
import Mobiles from './collections/Mobiles'


function Collections(){
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
		<div className="margintop-collections">
			<nav>
			  <div class="nav nav-tabs justify-content-between collections-tabs" id="nav-tab" role="tablist">
			    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Mens</button>
			    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Womens</button>
			    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Kids</button>
			    <button class="nav-link" id="nav-Mobiles-tab" data-bs-toggle="tab" data-bs-target="#nav-Mobiles" type="button" role="tab" aria-controls="nav-Mobiles" aria-selected="false" Mobiles>Mobile Phones</button>
			  </div>
			</nav>
			<div class="tab-content" id="nav-tabContent">
			  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><Mens/></div>
			  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><Womens/></div>
			  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0"><Kids/></div>
			  <div class="tab-pane fade" id="nav-Mobiles" role="tabpanel" aria-labelledby="nav-Mobiles-tab" tabindex="0"><Mobiles/></div>
			</div>


		</div>
	<Footer/>
</div>
	)

}

export default Collections;