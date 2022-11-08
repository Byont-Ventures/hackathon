// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

/**
 * Reference links (what is openzeppelin, how does erc721 work)
 * https://docs.openzeppelin.com/contracts/3.x/
 * https://docs.openzeppelin.com/contracts/3.x/api/token/erc721
*/
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @title Challenge 5
/// @author Byont Labs
/// @notice A barebones NFT contract example
contract Contract is ERC721{
  
  /// @dev library that can convert uint256 to string
  using Strings for uint256;

  /// @dev Constructor arguments are passed to the contract on contract creation, see Challenge_5.t.sol
  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol){}

  /// @dev private strings are NOT hidden, just hidden for smart contracts
  string private _baseURIextended;

  function setBaseURI(string memory _uri) external {
    _baseURIextended = _uri;
  }

  function _baseURI() internal view virtual override returns (string memory){
    return _baseURIextended;
  }
  function tokenURI(uint _id) public view virtual override returns (string memory){
    return string.concat(_baseURI(), _id.toString());
  }

}
