// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

/// @title Challenge 8
/// @author Byont Labs
/// @notice A barebones NFT contract example with documentation for learning purposes
contract Challenge8 is ERC721 {
  using Strings for uint256;

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
  /// @dev More about how require() works: https://www.alchemy.com/overviews/solidity-require
  /// @dev If you call the minting function from another contract, msg.sender will != tx.origin
  /// @dev More about msg.sender and tx.origin: https://ethereum.stackexchange.com/questions/113962/what-does-msg-sender-tx-origin-actually-do-why
  function mint(uint256 _amount) public payable {
    ///@dev usage of tx.origin is fine here but do your own research (dyor) on why tx.origin can be dangerous
    /// TODO: Add require statements here
    uint256 startId = totalSupply;
    totalSupply += _amount;
    for (uint256 i = 0; i < _amount; i++) {
      _safeMint(msg.sender, startId + i);
    }
  }
}
