import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `red`,
      marginBottom: `1.45rem`,
      height: `7em`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        
      }}
    >
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

      <div class="navContainer">
        <nav>
          <ul>
            <li><a class="navLi" href="#">home</a></li>
            <li><a class="navLi" href="#">about me</a></li>
            <li><a class="navLi" href="#">skills</a></li>
            <li><a class="navLi" href="#">projects</a></li>
            <li><a class="navLi" href="#">contact</a></li>
          </ul>
        </nav>
      </div>
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
