// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract Contract {
  function isMoreThanZero(uint256 amount) public pure {
    require(
      amount > 0,
      'Contract (isMoreThanZero): amount must be greater than 0'
    );
  }
}
