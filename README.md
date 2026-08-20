# OPN Web3 Learning

A beginner-friendly Web3 learning project focused on Solidity, smart contracts, and EVM-compatible blockchain development.

## Project Overview

This repository contains my practical Web3 learning experiments.

The first project is a simple Solidity smart contract called `Web3Storage`.

The contract demonstrates how data can be stored and updated on an EVM-compatible blockchain.

## Smart Contract

The `Web3Storage` contract includes:

- Store an initial message
- Read the stored message
- Update the stored message
- Emit an event when the message is updated
- Track the contract owner

## Contract Functions

### getMessage()

Reads the current message stored by the contract.

### setMessage()

Updates the stored message and emits a `MessageUpdated` event.
## OPN Testnet Deployment

The `Web3Storage` smart contract was deployed and tested on the OPN Testnet.

- Network: OPN Testnet
- Chain ID: 984
- Currency: OPN
- Contract Address: `0x5CBB6fA855DA57698418aB19218f84641752AADD`
- Solidity Version: `0.8.24`
- Deployment Tool: Remix IDE
- Wallet: MetaMask

### Contract Explorer

[View Contract on OPN Testnet Explorer](https://testnet.iopn.tech/address/0x5CBB6fA855DA57698418aB19218f84641752AADD)

## Contract Interaction

The deployed contract was successfully interacted with on OPN Testnet.

### Initial State

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

### Verification

- Contract deployment: Successful
- `getMessage()` initial read: Successful
- `setMessage()` state update: Successful
- `getMessage()` updated read: Successful
- GitHub Actions automated tests: Successful
## Technologies

- Solidity
- EVM
- Smart Contracts
- GitHub
- Web3 Development

## Project Structure

```text
opn-web3-learning/
├── contracts/
│   └── Web3Storage.sol
└── README.md
