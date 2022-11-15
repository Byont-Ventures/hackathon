// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

/// @title Challenge 2
/// @author Byont Labs
/*
 * The message in this contract has not been initialized yet. If you look at the test, it calls a function setMessage()
 * that sets the message in this contract to 'Hello World!'. It is your job to add it to this contract!
 * Hint:
 * - The function should accept a string parameter in memory
 * - The function should be public => https://docs.soliditylang.org/en/v0.8.17/contracts.html#function-visibility
 * - The function should be payable => https://docs.alchemy.com/docs/solidity-payable-functions#
 */

contract Contract {
  string message;

  /// @return message:string; the message stored in the contract.
  function getMessage() public view returns (string memory) {
    return message;
  }
  // /// @dev TODO: add setMessage() here!
}
