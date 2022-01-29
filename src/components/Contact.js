import React from 'react'

export default function Contact() {
    return (
        <div>
            <section
                id= "contactSection"
            >
                <h1
                    className= "sectionH1"
                >Contact Me.</h1>
                <p> cvs181801@gmail.com</p>
                <div
                    style={{
                        display: `flex`,
                        width: `10em`,
                        justifyContent: `space-between`
                    }}
                >
                    <strong><p><a href="https://www.linkedin.com/in/cas-spicer/">Linked In</a></p></strong>
                    <strong><p><a href="https://github.com/cvs181801">Github</a></p></strong>
                </div>
            </section>
        </div>
    )
}
