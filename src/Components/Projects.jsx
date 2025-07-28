import React from 'react'
import './Projects.css'
import img1 from '../assets/cadillacs.png'
import img2 from '../assets/hmaracart.png'
import img3 from '../assets/screenshot3.png'
import img4 from '../assets/sonali.png'
import img5 from '../assets/netflix.png'
import img6 from '../assets/tylt.png'

const Projects = () => {
  return (
    
        <div id="Projects" className=''>
        <div class="containerr pt-[7%] text-[#BFBFC6]">
            <h1 class="sub-title py-[5%]">PROJECTS</h1>
            <div class="work-list">
                <div class="work">
                    <img src={img1} alt="" />
                    <div class="layer">
                        <h3>Central Houston Cadillac</h3>
                        <p> Worked on the frontend of a web application focused on discussion and user interactions.
                        </p>
                        <a href="https://cadillacscar.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
                <div class="work">
                    <img src={img2} alt="" />
                    <div class="layer">
                        <div class="layer">
                            <h3>HmaraCart</h3>
                            <p>Implemented a shopping cart with add/remove/update item feature. frontend skills in routing using React Router DOM.
                            </p>
                            
                            <a href="https://hmaracarts.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src={img3} alt="" />
                    <div class="layer">
                        <h3>Online Shopping Website</h3>
                        <p>i have build dublicated amazon and more website.
                        </p>
                        <a href="https://app.netlify.com/projects/shopper-online/overview"><i class="fa-solid fa-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
                 <div class="work">
                    <img src={img4} alt="" />
                    <div class="layer">
                        <h3>Portfolio</h3>
                        <p> Implemented clean UI design with Tailwind CSS for responsiveness use  Sanity, React.js,  API integration.
                        </p>
                        <a href="https://sonalisharma.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
                <div class="work">
                    <img src={img5} alt="" />
                    <div class="layer">
                        <div class="layer">
                            <h3>Netflix</h3>
                            <p> Developed a fully responsive and modern e-commerce website using HTML, CSS, JavaScript, and React.js.
                            </p>
                            <a href="https://movienetfllix.netlify.app/login"><i class="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src={img6} alt="" />
                    <div class="layer">
                        <h3>Tylt</h3>
                        <p>Project Description: Worked on building the frontend user interface for a modern web application. 
                        </p>
                        <a href="https://tyltmoney.netlify.app/"><i class="fa-solid fa-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
   
  )
}

export default Projects