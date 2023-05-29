import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectCard';
import { toconvert,newsmokey,eyeimage} from "../../assets/index";
//import { projectOne, projectTwo, projectThree } from "../../assets/index";


const Projects = () => {
  
  return (
    
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="Forex Trading Bot"
          des="Created using Smart Money Concepts using Meta Quotes Language 
          4 and technical indicators.Implemented uniform,routine, and repeatable operations at the highest possible speed of response with the
          utmost precision of their implementation .
          "
          src={toconvert}
          
        />
        <ProjectsCard
          title="NewsMonkey"
          des="NewsMonkey is a cutting-edge web application developed using the power of React and the NewsAPI, designed to deliver the latest and most relevant news directly to your fingertips. With NewsMonkey, you can stay informed and up-to-date with current events from around the world in a user-friendly and efficient manner.
          "
          src={newsmokey}
          
          
        />
        <ProjectsCard
          title="Detection and Classification of Eye Disease"
          des="Developed a Classification and Prediction Algorithm based on 
          CNN and Deep Learning to classify eye diseases.The algorithm uses SMOTE for balancing the data and different activation functions."
          src={eyeimage}
        />
      </div>
    </section>
  );
}

export default Projects