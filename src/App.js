import Home from './components/Home'
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Branches from './components/Branches'
import Feedback from './components/inc/Feedback'
import Collections from './components/inc/Collections'
import Gallery from './components/inc/Gallery'
import React from 'react'
import './App.css'
function App(){

  
  

  return(
    <Router>
  
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/branches" element={<Branches/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
		<Route path="/home/collections" element={<Collections/>}/>
		<Route path="/home/gallery" element={<Gallery/>}/>        
    </Routes>
    
  
</Router>

    )


}

export default App;