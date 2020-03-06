import React from 'react';
import './App.css';

import Header from './Header'
import data from './metal.json'
import Band from './Band'

function App() {
  console.log(data)
  return (
    <div className="App" style={styles.app}>
      <Header/>  
      <div style={styles.bands}>
        <p style={styles.all}>Bands: {data.length}</p>
        {
          data.map((band, i) => { 
            return ( 
              <Band 
                  key={i}
                  name={band.band_name} 
                  formed={band.formed} 
                  origin={band.origin} 
                  fans={band.fans} 
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

const styles = {
  app: {
    backgroundColor: '#310119',
    minHeight: '100vh',
    minWidth: '100vw'
  },
  all: {
    color: '#FEFEFE'
  }
}
