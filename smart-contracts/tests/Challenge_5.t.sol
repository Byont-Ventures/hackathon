// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_5.sol';

contract Challenge5 is Test {
  using Strings for uint256;
  Contract c;
  string baseURI = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/';

  function setUp() public {
    c = new Contract('NFT Example', 'NFTEX', 100);
    c.setBaseURI(baseURI);
  }
}
