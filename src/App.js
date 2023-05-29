
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner"
import React,{Suspense}from "react";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume"
import Contact from "./components/contacts/Contact";
import ModelViewer from "./components/model/ModelViewer";



function App() {
  return (
    <div className="w-full h-[3800px] bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto">
      <Navbar/>
      <Banner/>
      <Projects/>
      <Resume/>
      <Contact/>
      
      
      </div>
     
    </div>
  );
}

export default App;
