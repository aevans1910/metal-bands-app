import React from 'react'

function Band(props) {
  return (
    <div style={styles.band}>
        <h3 style={styles.name}>{props.name}</h3>
        <p style={styles.info}>Formed: {props.formed} </p>
        <p style={styles.info}>{props.origin}</p>
        <p style={styles.info}>Fans: {props.fans}</p>          
    </div>
  )
}

export default Band;

const styles = {
  name: {
    color: '#FEFEFE'
  },
  info: {
    color: '#FEFEFE',
    justifyContent: "space-between",
  },
}