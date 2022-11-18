// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@challenge-11/src/Challenge_11.sol';

contract Challenge11Test is Test {
  using Strings for uint256;
  Challenge11 c;
  string baseURI = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/';
  address Alice;
  address Bob;

  function setUp() public {
    c = new Challenge11('NFT Example', 'NFTEX', 100);
    c.setBaseURI(baseURI);
    /// @dev Initialize two actors Alice and Bob
    Alice = address(0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf);
    Bob = address(0x2B5AD5c4795c026514f8317c7a215E218DcCD6cF);
  }

  /// @notice Checks that the tokenURI is properly constructed
  /// @param _id The token id
  /// TODO: Fix the test!
  function testTokenUri(uint256 _id) public {
    assertEq(c.tokenURI(_id), string.concat(baseURI, _id.toString()));
  }

  /// @notice Non-owners should not be able to set base URI
  /// @dev vm.startPrank() and the like are Foundry cheat codes
  /// @dev More info amount cheat codes: https://book.getfoundry.sh/cheatcodes/
  function testFailSetBaseURI() public {
    vm.startPrank(address(1337));
    c.setBaseURI('1337');
    vm.stopPrank();
  }

  /// @notice Owners should be able to set the base URI
  /// TODO: Fix the test!
  function testSetBaseURI() public payable {
    uint256 id = 69;
    string memory newURI = '1337';
    c.setBaseURI(newURI);
    assertEq(c.tokenURI(id), string.concat(newURI, id.toString()));
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
    vm.startPrank(Alice);
    vm.expectRevert();
    c.ownerOf(0);
    assertEq(initialSupply, 0);
    c.mint(amount);
    assertEq(c.totalSupply(), amount);
    assertEq(c.ownerOf(amount - 1), Alice);
    vm.stopPrank();
  }

  /// @notice Fuzz test (within vm assumption constraints) minting max amount allowed
  /// @param amount The amount to mint
  /// @dev More about fuzz testing: https://book.getfoundry.sh/forge/fuzz-testing?highlight=fuzz%20testing#fuzz-testing
  function testMintMax(uint256 amount) public {
    uint256 maxSupply = c.maxSupply();
    /// @dev Set the user max mint per wallet to the max allowed for this test
    c.setUserMaxMint(2 ** 256 - 1);
    vm.assume(amount > 0);
    vm.assume(amount <= maxSupply);
    vm.startPrank(Alice);
    c.mint(amount);
    assertEq(c.totalSupply(), amount);
    vm.stopPrank();
  }

  /// @notice Fuzz test minting over max supply
  /// @param amount The amount to mint
  function testMintOverMax(uint256 amount) public {
    /// @dev Set the user max mint to the max allowed for this test
    c.setUserMaxMint(2 ** 256 - 1);
    uint256 maxSupply = c.maxSupply();
    vm.assume(amount > maxSupply);
    vm.startPrank(Alice);
    vm.expectRevert('Amount exceeds max supply');
    c.mint(amount);
    vm.stopPrank();
  }

  /// @notice Test minting 0 NFT's
  function testMintZero() public {
    vm.startPrank(Alice);
    vm.expectRevert('Amount cannot be zero');
    c.mint(0);
    vm.stopPrank();
  }

  /// @notice Users should not be able to mint more than allowed per wallet
  function testMintOverAllowed(uint amount, address user) public {
    uint maxPerUser = c.maxPerUser();
    uint maxSupply = c.maxSupply();
    vm.assume(amount > maxPerUser);
    vm.assume(amount <= maxSupply);
    /// @dev User mints
    vm.expectRevert('Not allowed to mint this many');
    vm.prank(user, user);
    c.mint(amount);
  }
}
