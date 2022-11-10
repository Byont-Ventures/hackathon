// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_7.sol';

contract Challenge7 is Test {
  // using Strings for uint256;
  // Contract c;
  // string baseURI = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/';
  // function setUp() public {
  //   c = new Contract('NFT Example', 'NFTEX', 100);
  //   c.setBaseURI(baseURI);
  // }
  // /// @notice Checks that the tokenURI is properly constructed
  // /// @param _id The token id
  // function testTokenUri(uint256 _id) public {
  //   assertEq(c.tokenURI(_id), string.concat(baseURI, _id.toString()));
  // }
  // /// @notice Test minting 1 from Externally Owned Account (EOA)
  // function testMintEOA() public {
  //   console.log('Minting from EOA...');
  //   uint256 initialSupply = c.totalSupply();
  //   uint256 amount = 1;
  //   /// @dev Specify the msg.sender as minter
  //   vm.startPrank(msg.sender);
  //   /// @dev We expect c.ownerOf(0) to revert since the token id 0 does not exist yet
  //   vm.expectRevert();
  //   c.ownerOf(0);
  //   /// @dev Initial supply should be 0
  //   assertEq(initialSupply, 0);
  //   /// @dev Mint token
  //   c.mint(amount);
  //   /// @dev Total supply should now equal the amount we minted
  //   assertEq(c.totalSupply(), amount);
  //   /// @dev Use ERC721 ownerOf() to check that the owner of token 0 is the msg.sender
  //   assertEq(c.ownerOf(amount - 1), msg.sender);
  //   vm.stopPrank();
  // }
  // /// @notice Fuzz test (within vm assumption constraints) minting max amount allowed
  // /// @param amount The amount to mint
  // /// @dev More about fuzz testing: https://book.getfoundry.sh/forge/fuzz-testing?highlight=fuzz%20testing#fuzz-testing
  // function testMintMax(uint256 amount) public {
  //   uint256 maxSupply = c.maxSupply();
  //   vm.assume(amount > 0);
  //   vm.assume(amount < maxSupply);
  //   vm.startPrank(msg.sender);
  //   c.mint(amount);
  //   assertEq(c.totalSupply(), amount);
  //   vm.stopPrank();
  // }
}
