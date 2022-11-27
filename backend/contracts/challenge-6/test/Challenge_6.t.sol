// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import "forge-std/Test.sol";

import "@challenge-6/src/Challenge_6.sol";

contract Challenge6Test is Test {
  using Strings for uint256;
  Challenge6 c;
  string baseURI = "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/";

  function setUp() public {
    c = new Challenge6("NFT Example", "NFTEX", 100);
    /// TODO: implement setBaseURI() here!
  }

  /// @notice Checks that the tokenURI is properly constructed
  /// @param _id The token id
  function testTokenURI(uint256 _id) public {
    assertEq(c.tokenURI(_id), string.concat(baseURI, _id.toString()));
  }
}
