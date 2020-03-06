import React, {Component} from 'react';


function Header () {
  return (
    <div style={styles.navbar}>
      <div style={styles.left}>
        <p style={styles.titleFont} to="/">FEW 1.2 Final Assessment</p>
      </div>
      <div style={styles.right}>
        <p style={styles.titleFont}>Ariane Evans</p>
      </div>
    </div>
  )
}


export default Header;

const styles = {
  navbar: {
    background: '#400321',
    maxWidth: '100vw',
    height: '5em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5vw',
    paddingRight: '5vw'

  },
}