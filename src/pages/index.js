import * as React from "react"
import { Link } from "gatsby"
import StaticImage from "../images/pic.jpg"
import Astronaut from "../images/gatsby-astronaut.png"

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
    <p>I started learning to code because I wanted to challenge myself, and learn more skills which can be used to help others. 
      <br/>
        Technology is powerful. Let's harness it and use it for good.
      <br/>
        I'm here to create amazing products while helping to make the internet a safer place for children. Today, we live, work and play
         virtually, and we have an abundance of resources at the click of a button.  Let's do this! 💪🏼
    </p>

    <p class="italicTxt">“For me, I am driven by two main philosophies: Know more today about the world than I knew yesterday, and lessen the suffering of others. You'd be surprised how far that gets you.” 
      <br/>― Neil deGrasse Tyson
      <br/>
      <br/>
    “Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”
      <br/> ― Margaret Mead</p>
     {/* <StaticImage
      src={StaticImage}
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Cas Spicer, Software Developer"
      style={{ marginBottom: `1.45rem` }}
    />   */}
    
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */}
  </Layout>
)

export default IndexPage
