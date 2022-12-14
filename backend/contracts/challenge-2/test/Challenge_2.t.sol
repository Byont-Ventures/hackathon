// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "@challenge-2/src/Challenge_2.sol";

contract Challenge2Test is Test {
  Challenge2 c;

  function setUp() public {
    c = new Challenge2();
  }

  // @notice Tests that the message returned from the contract is equal to "Hello World!"
  function testHelloWorld() public {
    /// @dev Sets the message to 'Hello World!' in Challenge_2.sol
    c.setMessage("Hello World!");
    /// @dev Get the message
    string memory message = c.getMessage();
    /// @dev The message should now be 'Hello World!'
    assertEq(message, "Hello World!");
  }
}
