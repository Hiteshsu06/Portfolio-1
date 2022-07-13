import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <div>
       <Routes>
         <Route path="/" element={<Navbar/>} >
         <Route path="/" index element={<Home/>}/>
         <Route path="/Home" index element={<Home/>}/>
         <Route path="/Services" element={<Services/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
       </Routes>
    </div>
  );
}

export default App;
