import React, {Component} from 'react'

class Listitem extends Component {
  render() {
    return (
      <div>
        This is {this.props.name}
      </div>
    )
  }
}

export default Listitem
