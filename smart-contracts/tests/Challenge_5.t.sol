// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_5.sol';

/// @dev TODO: add documentation
contract Challenge5 is Test {
  using Strings for uint256;
  Contract c;
  string baseURI = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/';

  function setUp() public {
    c = new Contract('NFT Example', 'NFTEX', 100);
    c.setBaseURI(baseURI);
  }

  function testBaseUri(uint _id) public {
    assertEq(c.tokenURI(_id), string.concat(baseURI, _id.toString()));
  }

  function testMintCA() public {
    vm.expectRevert('No minting from contract allowed');
    c.mint(100);
  }

  function testMintEOA() public {
    uint initialSupply = c.totalSupply();
    uint amount = 10;
    vm.startPrank(msg.sender);
    vm.expectRevert();
    c.ownerOf(0);
    assertEq(initialSupply, 0);
    c.mint(amount);
    assertEq(c.totalSupply(), amount);
    assertEq(c.ownerOf(amount - 1), msg.sender);
    vm.stopPrank();
  }

  function testMintMax(uint amount) public {
    uint maxSupply = c.maxSupply();
    vm.assume(amount > 0);
    vm.assume(amount < maxSupply);
    vm.startPrank(msg.sender);
    c.mint(amount);
    assertEq(c.totalSupply(), amount);
    vm.stopPrank();
  }

  function testMintOverMax(uint amount) public {
    uint maxSupply = c.maxSupply();
    vm.assume(amount > maxSupply);
    vm.startPrank(msg.sender);
    vm.expectRevert('Amount exceeds max supply');
    c.mint(amount);
    vm.stopPrank();
  }

  function testMintZero() public {
    vm.startPrank(msg.sender);
    vm.expectRevert('Amount cannot be zero');
    c.mint(0);
    vm.stopPrank();
  }

}
