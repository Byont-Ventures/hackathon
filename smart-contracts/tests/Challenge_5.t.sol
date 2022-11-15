// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_5.sol';

contract Challenge5Test is Test {
  using Strings for uint256;
  Challenge5 c;

  function setUp() public {
    c = new Challenge5('NFT Example', 'NFTEX', 100);
  }
}
