import * as React from "react"
import { Link } from "gatsby"
import StaticImage from "../images/pic.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <div
    style={{
      backgroundImage: `url(${StaticImage})`,
      backgroundSize: `cover`,
      height: `20em`,
      width: `15em`,
      border: `5px solid red`,
      margin: `1em 0 1em 0`
  }}
    ></div>
    <h2 class="italicTxt"
      style={{
        color: `red`
      }}
    
    >I dream in fire and javascript</h2>
    <p>I started learning to code because I wanted to challenge myself, and learn more skills which can be used to help others. 
      <br/>
        
      <br/>
        I'm here to create amazing products while helping to make the internet a safer place for children.
        Technology is powerful; so is community. Let's harness it and use it for good. 💪🏼
      <br/>
        Non-technical interests and passions: Cuddling cats, laughter as medicine, science fiction, music, art, and practicing Qi Gong
        <br/>
        Inspirations: Pop art, the Memphis design movement, vaporwave, music, science, mathematics and the natural world 
    </p>

    <p class="italicTxt">“For me, I am driven by two main philosophies: Know more today about the world than I knew yesterday, and lessen the suffering of others. You'd be surprised how far that gets you.” 
      <br/>― Dr. Neil DeGrasse Tyson
      <br/>
      <br/>
    “Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”
      <br/> ― Margaret Mead</p>
    
  </Layout>
)

export default IndexPage
