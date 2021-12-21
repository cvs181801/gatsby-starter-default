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
          <div class="h1Container">  
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
          <div class="navContainer">
            <nav>
              <ul class="navUl">
                <li class="navLi"><a class="navLiAnchor" href="#aboutmeSection">about me</a></li>
                <li class="navLi"><a class="navLiAnchor" href="#skillsSection">skills</a></li>
                <li class="navLi"><a class="navLiAnchor" href="#projectsSection">projects</a></li>
                <li class="navLi"><a class="navLiAnchor" href="#contactSection">contact</a></li>
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
