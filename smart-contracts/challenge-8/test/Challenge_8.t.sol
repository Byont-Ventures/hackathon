// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@challenge-8/src/Challenge_8.sol';

contract Challenge8Test is Test {
  using Strings for uint256;
  Challenge8 c;
  string baseURI = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/';

  function setUp() public {
    c = new Challenge8('NFT Example', 'NFTEX', 100);
    c.setBaseURI(baseURI);
  }

  /// @notice Checks that the tokenURI is properly constructed
  /// @param _id The token id
  function testTokenUri(uint256 _id) public {
    assertEq(c.tokenURI(_id), string.concat(baseURI, _id.toString()));
  }

  /// @notice Test minting 1 from Contract Account (CA)
  /// @dev vm.expectRevert() expects the line below to revert with the message params
  function testMintCA() public {
    console.log('Minting from contract...');
    vm.expectRevert('No minting from contract allowed');
    c.mint(1);
  }

  /// @notice Test minting 1 from Externally Owned Account (EOA)
  function testMintEOA() public {
    console.log('Minting from EOA...');
    uint256 initialSupply = c.totalSupply();
    uint256 amount = 1;
    vm.startPrank(msg.sender);
    vm.expectRevert();
    c.ownerOf(0);
    assertEq(initialSupply, 0);
    c.mint(amount);
    assertEq(c.totalSupply(), amount);
    assertEq(c.ownerOf(amount - 1), msg.sender);
    vm.stopPrank();
  }

  /// @notice Fuzz test (within vm assumption constraints) minting max amount allowed
  /// @param amount The amount to mint
  /// @dev More about fuzz testing: https://book.getfoundry.sh/forge/fuzz-testing?highlight=fuzz%20testing#fuzz-testing
  function testMintMax(uint256 amount) public {
    uint256 maxSupply = c.maxSupply();
    vm.assume(amount > 0);
    vm.assume(amount < maxSupply);
    vm.startPrank(msg.sender);
    c.mint(amount);
    assertEq(c.totalSupply(), amount);
    vm.stopPrank();
  }

  /// @notice Fuzz test minting over max amount allowed
  /// @param amount The amount to mint
  function testMintOverMax(uint256 amount) public {
    uint256 maxSupply = c.maxSupply();
    vm.assume(amount > maxSupply);
    vm.startPrank(msg.sender);
    vm.expectRevert('Amount exceeds max supply');
    c.mint(amount);
    vm.stopPrank();
  }

  /// @notice Test minting 0 NFT's
  function testMintZero() public {
    vm.startPrank(msg.sender);
    vm.expectRevert('Amount cannot be zero');
    c.mint(0);
    vm.stopPrank();
  }
}
