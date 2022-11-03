// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_3.sol';

contract Challenge3 is Test {
  Contract c;

  function setUp() public {
    c = new Contract();
  }

  /// @notice Tests that a message can be successfully added to the existing message
  /*
   * Some test functionality is yet do be added!
   */
  function testHelloWorld() public {
    /// @dev Get the initial message
    string memory initMessage = c.getMessage();
    /// @dev TODO: Initial message should be equal to 'Hello'

    /// @dev TODO: Add ' World!' to the message

    /// @dev Get the new message
    string memory newMessage = c.getMessage();
    /// @dev The message should now be 'Hello World!'
    assertEq(newMessage, 'Hello World!');
  }
}
