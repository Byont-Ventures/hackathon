// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import 'forge-std/Test.sol';

import '@challenge-1/src/Challenge_1.sol';

contract Challenge1Test is Test {
  Challenge1 c;

  function setUp() public {
    c = new Challenge1();
  }

  /// @notice Tests that the message returned from the contract is equal to "Hello World!"
  /// @dev Functions that begin with the word 'test' are, well... tests!
  function testHelloWorld() public {
    /// @dev get the message of the smart contract and store it in a variable in memory
    string memory message = c.getMessage();
    /// @dev assertEq(a, b) returns true if a === b
    assertEq(message, 'Hello World!');
  }
}
