// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

/// @title Challenge 6
/// @author Byont Labs
/// @notice A barebones NFT contract example with overkill documentation for learning purposes
/**
  TODO: Implement a function called setBaseUri() that sets _baseURIextended. 
        The function should take a string.
  TODO: Implement a function called tokenURI() that constructs, then returns a token URI for a given token ID
        The function should take a uint for the token id 
        The function should override the default ERC721 tokenURI() function
        The function should construct the token URI by concatenating the baseURI with the given token ID
        The function should return the token ID
 */
contract Challenge6 is ERC721 {
using Strings for uint256;

constructor(
  string memory _name,
  string memory _symbol,
  uint256 _maxSupply
) ERC721(_name, _symbol) {
  maxSupply = _maxSupply;
}

/// @notice The max amount of allowed NFT mints
uint256 public maxSupply;

/// @notice The base uri for NFT metadata, should become something like ipfs://somestring/
/// @dev Private strings are NOT hidden for humans, just for other smart contracts
string private _baseURIextended;

/// TODO: Write setBaseURI here

/// @notice Returns the base uri
/// @dev Overrides the standard _baseURI() functionality of the ERC721 standard to fit our needs
/// @return _baseURIextended The base uri
function _baseURI() internal view virtual override returns (string memory) {
  return _baseURIextended;
}

/// @notice Creates the token uri based off of a given token id by concatenation (rings a bell?)
/// @dev Overrides the standard tokenURI() functionality of the ERC721 standard to fit our needs
/// @param _id The token id
/// @return => The token uri
/// TODO: Write the tokenUri function here!
}
