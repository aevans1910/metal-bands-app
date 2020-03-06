import React from 'react'

function Band(props) {
  return (
    <div style={styles.band}>
      <h3 style={styles.name}>{props.name}</h3>
      <div style={styles.body}>
        <p style={styles.info}>Formed: {props.formed} 
            {props.origin} Fans: {props.fans}</p>          
      </div>
    </div>
  )
}

export default Band;

const styles = {
  name: {
    color: '#FEFEFE'
  },
  info: {
    color: '#FEFEFE'
  },
  body: {
    display: 'flex',
    margin: 'auto',
    width: '90vw'
  },
}