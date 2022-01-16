import React from 'react';

class Detector extends React.Component {
  render() {
    const ethereum = window.ethereum
    return (
      <React.Fragment>
        {ethereum && <p style={{color: '#00ff00'}}>⬤</p>}
        {!ethereum && <p style={{color: '#ff0000'}}>⬤</p>}
      </React.Fragment>
    );
  }
}

export default Detector;
