# Fragment

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/0xver/fragment/blob/master/LICENSE.md)

## Accelerate frontend development with Fragment
Fragment builds frontend <a href="https://ethereum.org">Ethereum</a> dapps by creating components that communicate with <a href="https://metamask.io">MetaMask</a> and smart contracts on the blockchain. <a href="https://ethereum.org/en/dapps">Dapps</a> have their backend code (smart contracts) running on a decentralized network and not a centralized server. They use the Ethereum blockchain for data storage and smart contracts for their logic. <a href="https://ethereum.org/en/developers/docs/web2-vs-web3">Web3</a> refers to decentralized applications (dapps) that run on the blockchain.

### How It Works
Using HTML ID attributes, Fragment accelerates frontend development allowing designers to build their dapps quickly on platforms like Webflow. Assign an ID to a div block in Webflow and access its functionality.

## Supported HTML Targets
| ID | Description |
| --- | --- |
| `detector` | Looks for `window.ethereum` and color indicator |
| `connector` | Signs and connects with MetaMask |
| `account` | Displays the current account address |

To create fragments for smart contract functions, add the contract's ABI to the `/src` folder.

# Installation
Clone Fragment
```
gh repo clone 0xver/fragment
```
Install packages
```
npm install
```
Launch project on local network http://localhost:3000
```
npm start
```

# Building on Webflow
Embed the React packages into the head tag section of the page
```
<script src="https://unpkg.com/react@17.0.0/umd/react.production.min.js"></script>
```
```
<script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.production.min.js"></script>
```
Deploy bundle.js onto <a href="https://www.digitalocean.com/products/spaces">Spaces Object Storage</a> and embed it into the before /body tag section of the page
```
<script src="https://<YOUR-SPACE-NAME>.<REGION>.digitaloceanspaces.com/bundle.js"></script>
```
You have now embedded the components onto your website and can assign HTML targets in the Webflow designer environment. Create classes inside fragments to stylize the components.
