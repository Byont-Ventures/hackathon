// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.8.12;

import 'forge-std/Test.sol';

import '@challenge-4/src/Challenge_4.sol';

contract Challenge4Test is Test {
  Challenge4 c;

  function setUp() public {
    c = new Challenge4();
  }

  /// @notice Tests that a message can be successfully added to the existing message
  /*
   * Some test functionality is yet to be added!
   */
  function testHelloWorld() public {
    /// @dev Get the initial message
    string memory initMessage = c.getMessage();
    /// @dev TODO: Initial message should be equal to 'Hello'
    assertEq(initMessage, 'Hello');
    /// @dev TODO: Add ' World!' to the message
    c.addToMessage(' World!');
    /// @dev Get the new message
    string memory newMessage = c.getMessage();
    /// @dev The message should now be 'Hello World!'
    assertEq(newMessage, 'Hello World!');
  }
}
