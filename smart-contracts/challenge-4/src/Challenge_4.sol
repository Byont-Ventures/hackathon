// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.8.12;

/// @title Challenge 4
/// @author Byont Labs
/// @notice addToMessage() should add a string to the message! (concatenation)
contract Challenge4 {
  string message = 'Hello';

  /// @return message:string; the message stored in the contract.
  function getMessage() public view returns (string memory) {
    return message;
  }

  /// @dev TODO: complete addToMessage() here!
  function addToMessage() public payable {}
}
