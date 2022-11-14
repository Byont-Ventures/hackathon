// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

/// @title Challenge 3
/// @author Byont Labs
/// @notice addToMessage() should add a string to the message! (concatenation)
contract Contract {
  string message = 'Hello';
  /// @return message:string; the message stored in the contract.
  function getMessage() public view returns (string memory) {
    return message;
  }
  /// @dev TODO: complete addToMessage() here!
  function addToMessage() public payable {
    message = string.concat();
  }
}
