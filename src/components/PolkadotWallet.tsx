import React, { useEffect, useState } from "react";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { postRequest } from "../services/ApiCalls";

export default function PolkadotWallet({ onModulesFetched }: { onModulesFetched: (data: any) => void }) {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | null>(null);
  const [moduleNames, setModuleNames] = useState<string[]>([]);

  useEffect(() => {
    async function connectWallet() {
      const extensions = await web3Enable("MyApp");
      if (extensions.length > 0) {
        const allAccounts = await web3Accounts();
        setAccounts(allAccounts as InjectedAccountWithMeta[]);
      }
    }

    connectWallet();
  }, []);

  const handleAccountSelection = (accountIndex: number) => {
    setSelectedAccount(accounts[accountIndex]);
  };

  const handlePostRequest = () => {
    if (selectedAccount) {
      postRequest(selectedAccount, (data) => {
        console.log("Response data:", data);
        onModulesFetched(data);
      });
    }
  };

  return (
    <div>
      <button onClick={() => {}}>Connect</button>
      {accounts.length > 0 && (
        <select onChange={(e) => handleAccountSelection(parseInt(e.target.value, 10))}>
          {accounts.map((account, index) => (
            <option key={index} value={index}>
              {account.meta.name} ({account.address})
            </option>
          ))}
        </select>
      )}
      {selectedAccount && (
        <div>
          <p>Account Name: {selectedAccount.meta.name}</p>
          <p>Account Address: {selectedAccount.address}</p>
        </div>
      )}
      <button onClick={handlePostRequest}>Send POST request</button>
    </div>
  );
}
