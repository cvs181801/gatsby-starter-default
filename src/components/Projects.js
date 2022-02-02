import React from 'react'
import Pic15Minutes from "../images/15Minutes.png"
import Calculator from "../images/calculator.png"

export default function Projects() {
    return (
        <div>
            <section
                id= "projectsSection"
            >
            <h1
                className= "sectionH1"
            >Projects.</h1>
            <h2>15 Minutes</h2>
            <div
                style={{
                    backgroundImage: `url(${Pic15Minutes})`,
                    backgroundSize: `cover`,
                    height: `25em`,
                    width: `35em`,
                    margin: `1em 0 1em 0`
                }}
            ></div>
                <p>
                    15 Minutes is an app I built using the Twitter API.  It contains a unique take on the concept introduced by Andy Warhol; "15 Minutes of Fame".  

                    This project was built in React and Node.js with Express, using the Twitter API.  
                    Find more info on the Twitter API <a href="https://developer.twitter.com/en/products/twitter-api">here.</a>

                    <br/>

                    I think Andy would have loved all forms of social media, including Twitter.  He was fascinated by celebrities and the phenomenon of fame.
                    The goal of this project is to encourage the user/viewer to think critically about their use of social media.
                    Now that we're living in an age when each person can have their 15 minutes, isn't it time to take Andy's excitement a step further?  
                    Instead of simply having your 15 minutes, shouldn't we use that 15 minutes for something positive? 

                    <br/>

                    I decided to showcase 5 inspirational celebrities who are frequently using their Twitter platform to send positive messages to their fans.
                    <br/>
                    <strong><a href="https://calm-citadel-32694.herokuapp.com/">Check out the app here.</a></strong>

                    <br/>

                    <strong><a href="https://github.com/cvs181801/15-minutes">View the code on Github here.</a></strong>
                </p>
                <br/>
                <br/>
                <hr/>
                <br/>
                <br/>
                <h2>Web Based Calculator</h2>
                    <div
                    style={{
                        backgroundImage: `url(${Calculator})`,
                        backgroundSize: `cover`,
                        height: `25em`,
                        width: `30em`,
                        margin: `1em 0 1em 0`
                    }}
                ></div>
                        <p>
                        I'm loving this web based calculator app I built, inspired by calculators of the 90's!
                        It was using vanilla Javascript, and designed according the the mathematical principle of PEMDAS, with one caveat
                        - since it doesn't support calculation / input of parentheses or exponents, it's technically more of an 'MDAS' calculator.
                        The MDAS order of operations is achieved by using multiple loops to calculate results according to the order Multiplication, Division, Addition, and Subtraction. 
                        I used regular expressions to capture the operands the user enters, as well as the numbers, which go into an array and get passed through the MDAS function loops. 
                        If the result is a very long decimal, it should round to the nearest 10 thousandth place (4 decimal places). 

                        <br/>
                        -Negative numbers. 
                        Currently, the calculator is not programmed to support negative numbers. It would be nice to add this feature into the programming.
                        -Parentheses and exponents.  It would be nice to add these features as well, and make this an official PEMDAS calculator!

                    <br/>
                        <strong><a href="https://cvs181801.github.io/calculator-app/">Check out the app here.</a></strong>

                        <br/>

                        <strong><a href="https://github.com/cvs181801/calculator-app">View the code on Github here.</a></strong>
                    </p>

                    <br/>
                <p>Check back for more projects soon!</p>
        </section>
        </div>
    )
}
