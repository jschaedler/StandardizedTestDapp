import React, { Component } from 'react'


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark  fixed-top flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="/"

          rel="noopener noreferrer"
          style={textStyle}
        >
          Standardized Test
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small ></small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

const textStyle = {
  fontColor: '#bfbebe'
}

export default Navbar;
