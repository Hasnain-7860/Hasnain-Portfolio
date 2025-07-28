import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div id="Services">
        <div class="containerr pt-[10%] text-[#BFBFC6]">
            <h1 class="sub-title">My Services</h1>
            <div class="services-list">
                <div>
                    <i class="fa-solid fa-code"></i>
                    <h2>Web Design</h2>
                    <p>i have knowledge Web Design & Responsive Web Design
                        design websites that work well on both desktop and mobile & tablet.


                    </p>
                          <a href="">Learn more</a>
                </div>
                <div>
                    <i class="fa-jelly fa-regular fa-shield"></i>
                    <h2>Frontend Development</h2>
                    <p> i have knowledge Frontend Development
                         HTML, CSS, JavaScript, React.js, and TypeScript.
                    </p>
                          <a href="#">Learn more</a>
                </div>
                <div>
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-js"></i>
                    <h2>HTML, CSS & JavaScript using a build website</h2>
                    <p></p>
                          <a href="https://food23-website.netlify.app/">Learn more</a>
                </div>
                <div>
                    <i class="fa-brands fa-react"></i>
                    <h2>React js</h2>
                    <p>i have build website in React js Whether you work on your own or with thousands of other developers, using React feels the same.
                        This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React.
                    </p>
                          <a href="#">Learn more</a>
                </div>
            </div>
            </div> 
    </div>
  )
}

export default Service