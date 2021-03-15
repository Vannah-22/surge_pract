import React from 'react';
import './Home.css'; 
// import seniorpic from './seniorpic.jpg';
// console.log(seniorpic); 

class Home extends React.Component {
    render() {
        return (  
            <div className="bio">
                <p> 
                    Hi my name is Vanessa. I'm a Center New Mexico Community
                College graduate, and I've been learning computer coding and 
                website design for about seven weeks. I have an Associates degree 
                in Liberal Arts and I graduated high school in 2017. In five years, I
                plan to expand my interests and further my education in formal writing, 
                computer technology/cybersecurity, screenplay/storyboard writing, 
                philosophy and social history. I like to sew in my free time. 
                </p>

            {/* <img srcset="images/seniorpic.jpg 1x" src="images/seniorpic.jpg" alt="seniorpicturevvhs"/> */}
            {/* <img src={require('./seniorpic.jpg')}/> */}
            {/* // <img src={require('./logo.jpeg')} /> */}
            {/* <img  src={seniorpic} className="seniorpic" alt="VVHS Senior Picture"> </img> */}
            </div>

        )
    }
}
export default Home;