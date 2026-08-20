# OPN Testnet Deployment

## Network

- Network: OPN Testnet
- Chain ID: 984
- Currency: OPN
- RPC: https://testnet-rpc.iopn.tech
- Explorer: https://testnet.iopn.tech

## Contract

- Contract Name: Web3Storage
- Contract Address: `0x5CBB6fA855DA57698418aB19218f84641752AADD`

## Initial Message

My first OPN Web3 smart contract deployment.

## Contract Features

- Stores a message on-chain
- Reads the stored message
- Updates the stored message
- Emits a `MessageUpdated` event
- Stores the contract owner address

## Deployment

The contract was compiled with Solidity `0.8.24` and deployed to OPN Testnet using Remix and MetaMask.

## Explorer

https://testnet.iopn.tech/address/0x5CBB6fA855DA57698418aB19218f84641752AADD
## Contract Interaction

### Read Initial State

The `getMessage()` function was called successfully after deployment.

Initial message:

`My first OPN Web3 smart contract deployment.`

### Update Contract State

The `setMessage()` function was successfully executed on OPN Testnet.

Updated message:

`Updated my Web3 contract state on OPN Testnet.`

### Verify Updated State

The `getMessage()` function was called again after the state update.

Verified result:

`Updated my Web3 contract state on OPN Testnet.`

This confirms that the contract state was successfully updated and read on OPN Testnet.

## Verification

- Contract deployed successfully: Yes
- `getMessage()` initial read: Successful
- `setMessage()` state update: Successful
- `getMessage()` updated read: Successful
- GitHub Actions automated tests: Successful
