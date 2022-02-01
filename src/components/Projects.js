import React from 'react'
import Pic15Minutes from "../images/15Minutes.png"

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
                    height: `22em`,
                    width: `30em`,
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
                    <strong><a href="https://github.com/cvs181801/15-minutes">View the code on Github here.</a></strong>
                </p>
                    <br/>
                <p>Check back for more projects soon!</p>
        </section>
        </div>
    )
}
