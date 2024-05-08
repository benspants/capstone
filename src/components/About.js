import React from "react";
import ChefsA from "../images/ChefsA.jpg"
import ChefsB from "../images/ChefsB.jpg"

const About = () => {
    return(
        <div className="about">
            <div className="content-about">
                <h4>Little Lemon</h4>
                <h5>Chicago</h5>
                <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non, nisi ut odit ex neque reprehenderit accusantium optio ratione eius temporibus veritatis maiores, architecto fugiat saepe suscipit totam cupiditate ullam beatae accusamus soluta libero quas! Itaque vel aut laborum aliquid ullam iste omnis beatae, incidunt quis! Nihil nobis eaque officia minus iure soluta eum, voluptate odio tenetur ratione molestias illo quasi harum blanditiis, vero, autem excepturi totam unde perferendis odit optio neque. Eligendi nam aliquid quos vitae eveniet aliquam accusantium.</p>
            </div>
          
                
            <div className="owners">
                <img id="ChefsA" src = {ChefsA} alt="Mario and Adrian A"></img>
                <img id="ChefsB" src = {ChefsB} alt="Mario and Adrian B"></img>
            </div>
        </div>
    )
}
export default About