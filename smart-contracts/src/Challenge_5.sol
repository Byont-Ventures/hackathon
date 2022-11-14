// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

/**
 * Reference links (what is openzeppelin, how does erc721 work)
 * https://docs.openzeppelin.com/contracts/3.x/
 * https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
 */
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

/// @title Challenge 5
/// @author Byont Labs
/// @notice A barebones NFT contract example with overkill documentation for learning purposes
/**
  TODO: Make the contract ERC721
  TODO: Pass arguments to the constructor (See test file)
  TODO: Inside the constructor, set max supply to what is passed as an argument
 */
contract Contract {
  /// @dev Library that can convert uint256 to string, no import required (by the way, uint is short for uint256)
  using Strings for uint256;

  /// @dev Constructor arguments are passed to the contract on contract creation, see Challenge_5.t.sol
  /// @dev TODO: Create constructor here!
  constructor() ERC721() {
    // set max supply here!
  }

  /// @notice The max amount of allowed NFT mints
  uint256 public maxSupply;
}
