import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello"
import Dashboard from "./pages/Dashboard";
import ContactMe from "./pages/ContactMe";
import Skills from "./pages/Skills";
import Home from "./pages/Home";

function App() {
 
 

  return (
    <>
      <div className='App'>
       
        <BrowserRouter>
        <Routes>
          <Sidebar>
          <Route path="/" element = {<Home/>}/>
          <Route path="/home" element = {<Home/>}/>
          <Route path="/contactMe" element = {<ContactMe/>}/>
          <Route path="/skills" element = {<Skills/>}/>
          </Sidebar>
        
        </Routes>
        
        </BrowserRouter>
       
      </div>
      
    </>
  )
}

export default App
