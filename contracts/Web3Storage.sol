// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Web3Storage {
    string private storedMessage;
    address public owner;

    event MessageUpdated(
        address indexed user,
        string message
    );

    constructor(string memory initialMessage) {
        owner = msg.sender;
        storedMessage = initialMessage;
    }

    function setMessage(string calldata newMessage) external {
        storedMessage = newMessage;

        emit MessageUpdated(
            msg.sender,
            newMessage
        );
    }

    function getMessage() external view returns (string memory) {
        return storedMessage;
    }
}
