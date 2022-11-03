// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_1.sol';

contract Challenge1 is Test {
  Contract c;

  function setUp() public {
    c = new Contract();
  }

  /// @notice Tests that the message returned from the contract is equal to "Hello World!"
  /// @dev Functions that begin with the word 'test' are, well... tests!
  function testHelloWorld() public {
    /// @dev store the message of the smart contract in a variable in memory
    string memory message = c.showMessage();
    /// @dev assertEq(a, b) returns true if a === b
    assertEq(message, 'Hello World!');
  }
}
