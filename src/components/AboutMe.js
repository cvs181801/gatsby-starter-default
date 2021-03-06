import React from 'react'
import Resume from '../PDFFiles/Resume101.pdf'

export default function AboutMe() {
    return (
        <div>
            <section
                id= "aboutmeSection"
            >
                <h1
                    className= "sectionH1"
                >
                    About Me.
                </h1>
                    <p> Self-Taught Full-Stack Software Developer. 
                        I get excited about solving complex problems and building secure, sustainable applications.
                        I'm passionate about expanding positive change in the world.
                        I also have experience with public speaking, teaching, travelling and working abroad, which have given
                        me a great deal of experience working with diverse populations. </p>

                <div
                    style={{
                        display: `flex`,
                        width: `25em`,
                        justifyContent: `space-between`
                    }}
                >
                    <strong><p><a href="https://www.linkedin.com/in/cas-spicer/">Linked In</a></p></strong>
                    <strong><p><a href="https://github.com/cvs181801">Github</a></p></strong>
                    <strong><p><a href={Resume}>Resume</a></p></strong>
                </div>           
        </section>
    </div>
    )
}
