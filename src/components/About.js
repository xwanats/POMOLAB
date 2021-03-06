import React from 'react'
import '../styles/about.css'
import Donation from './Donation'
const About = () =>{
    return(
        <div>
            <div className="ui vertical segment center aligned">
                <h2>About this project</h2>
                <p>POMOLAB is a simple and customable pomodoro timer which helps users accomplishing the so called Pomodoro Technique. 
                <br/>
                I developed this front-end web application as my free time side project using React-Hooks Library</p>
                <img 
                    className='imgAbout1'
                    alt="hourglass"
                    src='https://images.unsplash.com/photo-1499377193864-82682aefed04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80'
                 />
            </div>
            <div className="ui vertical segment center aligned">
                <h2>How does is work?</h2>
                <img 
                    className='imgAbout2'
                    alt="infographic"
                    src="https://cdn-images-1.medium.com/max/1200/1*PCfris4pC2MGK5bV9TfkUQ.jpeg"
                />
                <p>Image from: <a href="https://inkley.us/">Inkley.us</a></p>
            </div>

            <div  className="ui raised segment center aligned">
                <h1>Learn more about Pomodoro technique: 
                    <a href=
                    "https://medium.com/@b.wanats/%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A1%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-pomodoro-technique-44e8150633b6">
                    Click Here</a> (Thai Version)
                    </h1>
            </div>
            <div className="ui vertical segment center aligned">
                <h3>Special thanks to <a href="https://www.behance.net/iiihsy">@iiihsy</a> for the logo design</h3>
                <img className="imgLogo" alt="logo1" src={require("../images/Pomolab-01.jpg")}/>
                <img className="imgLogo" alt="logo2" src={require("../images/Pomolab-02.jpg")}/>
            </div>
            <Donation/>    
    </div>
    )
}
export default About