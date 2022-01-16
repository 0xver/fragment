import React from 'react';
import { useEffect, useState } from 'react';

export default function Account() {
  const [account, setAccount] = useState();

  useEffect(() => {
    const getAccount = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        setAccount(accounts[0]);
      }
    };

    getAccount();
  },[]);

  if(window.ethereum) {
    window.ethereum.on('accountsChanged', function (accounts) {
      setAccount(accounts[0])
    })
  }

  return (
    <React.Fragment>
      {window.ethereum && <p>{account}</p>}
      {!window.ethereum && <p></p>}
    </React.Fragment>
  );
}
