import React from "react";

class Connector extends React.Component {
  handleClick = () => {
    window.ethereum.request({ method: "eth_requestAccounts" });
  }
  render() {

    return (
      <React.Fragment>
        {window.ethereum &&
          <button
            className="connector"
            onClick={this.handleClick}>
            CONNECT
          </button>
        }
        {!window.ethereum &&
          <a
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
            href="https://metamask.io/download.html"
            rel="noopener noreferrer"
            target="_blank">
            <button
              className="connector">
              DISABLED
            </button>
          </a>
        }
      </React.Fragment>
    );
  }
}

export default Connector;
