import React from "react";
import Brandon from "../images/brandon.jpg"
import Peter from "../images/peter.jpg"
import Selena from "../images/selena.jpg"
import Carmen from "../images/carmen.jpg"
import { ReactComponent as Star } from "../images/star.svg";
const Testimonials = () => {
    return(
        <div className="testimonials">
            <div className="header-testimonials">
                <h1>Testimonials</h1>
            </div>
            <div className="review-container">
                <div className="review">
                <span className="stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
              </span>
                    <img id="profile" src={Selena} alt="customer image"></img>
                    <h2>Selena G.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.</p>
                </div>
                <div className="review">
                <span className="stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
              </span>
                    <img id="profile" src={Brandon} alt="customer image"></img>
                    <h2>Brandon M.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.</p>
                </div>
                <div className="review">
                <span className="stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
              </span>
                    <img id="profile" src={Peter} alt="customer image"></img>
                    <h2>Peter R.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.</p>
                </div>
                <div className="review">
                <span className="stars">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
              </span>
                    <img id="profile" src={Carmen} alt="customer image"></img>
                    <h2>Carmen J.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda aliquid expedita non fugit qui laudantium facere iure
                culpa alias esse.</p>
                </div>
            </div>
        </div>
    )
}
export default Testimonials
