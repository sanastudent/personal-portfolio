

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faCode } from '@fortawesome/free-brands-svg-icons';



export default function Home(){
  return(

       

<main>
<section className="about-section">
  <div className="left-container">
    <div>
    <h6 className="about">Hey,I am Sana</h6>
    <h1 className="main">I am an IT student at GIAIC, <br />
    exploring the exciting fields of Web 3.0,Metaverse and AI.</h1>
    <p>As an IT student with a passion for technology, I am deeply engaged in learning the latest advancements <br />
     in software development, including Web 3.0, the Metaverse, and AI. My goal is to become a software developer, <br />
      where I can leverage my skills to build innovative, scalable, and impactful applications. <br />
       I am committed to continuous learning and aim to contribute to the evolving world of tech by developing  <br />
       solutions that make a difference.

</p>
  </div>

  <div className="skills">
    <h6 className="skill-section">My Skills</h6>
    <h1 className="expert-section">My Expertise</h1>


<div className="skills-list">
  <div className="skill-item">
    <div className="icon">
      <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '100%' }} />
    </div>
    <span>HTML</span>
  </div>

  <div className="skill-item">
    <div className="icon">
      <FontAwesomeIcon icon={faCss3Alt} style={{ fontSize: '100%' }} />
    </div>
    <span>CSS</span>
  </div>

  <div className="skill-item">
    <div className="icon">
      <FontAwesomeIcon icon={faJsSquare} style={{ fontSize: '100%' }} />
    </div>
    <span>JavaScript</span>
  </div>

  <div className="skill-item">
    <div className="icon">
      <FontAwesomeIcon icon={faReact} style={{ fontSize: '100%' }} />
    </div>
    <span>Next.js</span>
  </div>

 
</div>


  </div>
  </div> 

  <div className="image-container">
  <Image src="/profile.jpg" width="300" height="300" alt="profile"></Image>
  </div>
</section>
</main>
  )};
  