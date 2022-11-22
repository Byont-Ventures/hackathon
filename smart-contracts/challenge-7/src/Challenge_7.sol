// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

/// @title Challenge 7
/// @author Byont Labs
/// @notice A barebones NFT contract example with documentation for learning purposes
contract Challenge7 is ERC721 {
  /// @dev Library that can convert uint256 to string. (by the way, uint is short for uint256)
  using Strings for uint256;

  /// @dev Constructor arguments are passed to the contract on contract creation, see Challenge_5.t.sol
  constructor(
    string memory _name,
    string memory _symbol,
    uint256 _maxSupply
  ) ERC721(_name, _symbol) {
    maxSupply = _maxSupply;
  }

  /// @notice The base URI for NFT metadata, should become something like ipfs://somestring/
  /// @dev Private strings are NOT hidden for humans, just for other smart contracts
  string private _baseURIextended;

  /// @notice The total amount of minted NFT's
  uint256 public totalSupply;

  /// @notice The max amount of allowed NFT mints
  uint256 public maxSupply;

  /// @notice Sets the base URI
  /// @param _uri The base URI
  function setBaseURI(string memory _uri) external {
    _baseURIextended = _uri;
  }

  /// @notice Returns the base URI
  /// @dev Overrides the standard _baseURI() functionality of the ERC721 standard to fit our needs
  /// @return _baseURIextended The base URI
  function _baseURI() internal view virtual override returns (string memory) {
    return _baseURIextended;
  }

  /// @notice Creates the token URI based off of a given token id by concatenation (rings a bell?)
  /// @dev Overrides the standard tokenURI() functionality of the ERC721 standard to fit our needs
  /// @param _id The token id
  /// @return => The token URI
  function tokenURI(
    uint256 _id
  ) public view virtual override returns (string memory) {
    return string.concat(_baseURI(), _id.toString());
  }

  /// @notice Mints NFT's. Minting in this case means creating the NFT and assigning the minter as owner
  /// @param _amount The amount of tokens that will be minted
  /// @dev ERC721 documentation: https://docs.openzeppelin.com/contracts/4.x/api/token/erc721
  /// TODO: Add mint function here!
}
