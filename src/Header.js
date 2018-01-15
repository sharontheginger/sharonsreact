import React, {Component} from 'react'
import {Jumbotron} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="Jumbotron">
          <h1>Sharon Farmer</h1>
          <p classname="JumbotronText">
            Currently a coding bootcamp student, I am working toward being a full-stack web developer.<br /> Please contact me at the link above and feel free to browse my projects.
          </p>
        </Jumbotron>
        </div>
    );
  }
}
  export default Header
