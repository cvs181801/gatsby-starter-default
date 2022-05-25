import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      background: `red`,
      //marginBottom: `1.45rem`
    }}
  >
    <div
      className="headerContain"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
     <section
      id="headerSection"
     > 
          <div className="h1Container">  
                <h1 style={{ 
                    margin: 0,
                    //fontSize: `1.5rem`  // this will need to be removed , to be replaced with responsive inline styling.
                    }}>
                  <Link
                    to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`
                    }}
                  >
                    {siteTitle}
                  </Link>
                </h1>
          </div>
          <div 
            className="navContainer"
            style={{
              margin: `0 auto`,
              //border: `1px solid blue`,
            }}

          >
            <nav>
              <ul 
                className="navUl"
                //style={{border: `1px solid green`,}}
              
              >
                <li className="navLi"><a className="navLiAnchor" href="#aboutmeSection" style={{flexWrap: `wrap`}}>about me</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#skillsSection" style={{flexWrap: `wrap`}}>skills</a></li>
                </ul>
                <ul
                className="navUl"
                //style={{border: `1px solid green`,}}
                >
                <li className="navLi"><a className="navLiAnchor" href="#projectsSection" style={{ flexWrap: `wrap`}}>projects</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#contactSection" style={{ flexWrap: `wrap`}}>contact</a></li>
              </ul>
            </nav>
          </div>
       </section> 
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
