// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@challenge-5/src/Challenge_5.sol';

contract Challenge5Test is Test {
  using Strings for uint256;
  Challenge5 c;

  function setUp() public {
    c = new Challenge5('NFT Example', 'NFTEX', 100);
  }

  /// TODO: Write a test that checks that the maxSupply is equal to 100 (or the input)
}
