// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_1.sol';

contract TestContract is Test {
  Contract c;

  function setUp() public {
    c = new Contract();
  }

  
}
