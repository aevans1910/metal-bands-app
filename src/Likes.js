import React, {Component} from 'react'

class Likes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likesNumber: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(by) {
    this.setState({likesNumber: this.state.likesNumber + by})
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.right}>Likes: {this.state.likesNumber}</p>
        <div style={styles.left}>
          <button type="button" onClick={() => this.handleClick(1)}>UP</button>
          <button type="button" onClick={() => this.handleClick(-1)}>DOWN</button>
        </div>
      </div>
    )
  }
}

export default Likes;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  right: {
    color: '#FEFEFE',
    justifyContent: 'space-between'
  },
}