// Solidity Compiler Version
pragma solidity ^0.5.16;

// Contract definition
contract HelloWorld {
    string public message;

    constructor() public {
        message = "Hello World";
    }
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}

