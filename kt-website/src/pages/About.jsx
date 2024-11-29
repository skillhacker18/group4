import React from 'react';
import '../assets/css/about.css';

export function About() {
    return (
        <div className="aboutpage">
            <div className="about">
                <img src="/images/vp.jpg" alt="Vivid Printing Company Logo" className="logo" />
                <div className="text">
                    <h1>About Us</h1>
                    <p>
                        Vivid Printing is a dynamic printery based in Spanish Town, St. Catherine.
                        Founded by Ricardo Anderson in 2021, the company was created out of his enthusiasm for printing,
                        with a mission to enhance communication, marketing, and personal expression.
                    </p>
                    <p>We cater to both corporate clients and individuals.</p>

                    <h2>Our Mission Statement</h2>
                    <p>Where quality is our priority.</p>
                </div>
            </div>
        </div>
    );
}
