import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    
    style={{
      background: `red`,
      marginBottom: `1.45rem`,
      height: `10em`
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
            <li class="navLi"><a class="navLiAnchor" href="#">home</a></li>
            <li class="navLi"><a class="navLiAnchor" href="#">about me</a></li>
            <li class="navLi"><a class="navLiAnchor" href="#">skills</a></li>
            <li class="navLi"><a class="navLiAnchor" href="#">projects</a></li>
            <li class="navLi"><a class="navLiAnchor" href="#">contact</a></li>
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
