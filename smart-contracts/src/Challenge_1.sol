// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract Contract {
  string message;

  function showMessage() public view returns (string memory) {
    return message;
  }
}
