import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `red`,
      marginBottom: `1.45rem`,
      height: `11em`
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
                <h1 style={{ margin: 0 }}>
                  <Link
                    to="/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                    {siteTitle}
                  </Link>
                </h1>
          </div>
          <div className="navContainer">
            <nav>
              <ul className="navUl">
                <li className="navLi"><a className="navLiAnchor" href="#aboutmeSection">about me</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#skillsSection">skills</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#projectsSection">projects</a></li>
                <li className="navLi"><a className="navLiAnchor" href="#contactSection">contact</a></li>
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
