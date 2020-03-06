import React, {Component} from 'react';


function Header () {
  return (
    <div style={styles.navbar}>
        <p style={styles.titleFont} to="/">FEW 1.2 Final Assessment</p>
        <p style={styles.titleFont}>Ariane Evans</p>
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
    paddingRight: '5vw',
    justifyContent: 'space-between',
  },
  titleFont: {
    color: '#FEFEFE',
    fontSize: '1.6em',
    fontWeight: '400',
    textDecoration: 'none'
  }
}