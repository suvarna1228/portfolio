import Navbar from "./components/Navbar"
import Home from "../src/pages/Home"
import About from "../src/pages/About";
import Technogies from "../src/pages/Technologies";
import Experience from "../src/pages/Experience";
import Projects from "../src/pages/Projects"
import Contact from "../src/pages/Contact"


const App=()=> {

 return (
<div className="overflow-x-hidden text-neutral-300 antialiased
 selection:text-cyan-100"> 
 <div className="fixed top-0 -z-10 h-full w-full">
 <div className="absolute top-0 z-[-2] h-screen 
 w-screen bg-neutral-950 
 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
 </div>
 </div>
<div className="container mx-auto px-8">
<Navbar/>
<Home/>
<About/>
<Technogies/>
<Experience/>
<Projects/>
<Contact/>
</div>
</div>
 ) ; 
};

export default App
