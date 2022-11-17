// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

import 'forge-std/Test.sol';

import '@smart-contracts/Challenge_7.sol';

contract Challenge7 is Test {
  using Strings for uint256;
  Contract c;
  string baseURI = 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/';

  function setUp() public {
    /**
    * The print statement of Foundry. You can also use this to log variables.
    * Initially, you won't see the output. For that, you need to supply the `-vv` or `--watch`
    * flag to the test. Try running the test using `forge test --match-contract Challenge7 -vv`.
    * Also, try adding / removing v's and see what happens.
    */
    console.log('Setup msg sender: %s', msg.sender);
    console.log('Setup tx origin: %s', tx.origin);
    c = new Contract('NFT Example', 'NFTEX', 100);
    console.log('Setup Contract owner: %s', c.owner());
    c.setBaseURI(baseURI);
  }

  // /// @notice Checks that the tokenURI is properly constructed
  // /// @param _id The token id
  function testTokenUri(uint256 _id) public {
    assertEq(c.tokenURI(_id), string.concat(baseURI, _id.toString()));
  }

  /// @notice Test minting 1 from Externally Owned Account (EOA)
  /**
    * Mints a token from an EOA (Externally Owned Account.)
    * That means it simulates an off-chain user (human or program) is calling the mint function,
    * not a contract or anything operating directly onchain, but more on this later.
   */
  function testMintEOA() public {
    console.log('Minting from EOA...');
    uint256 initialSupply = c.totalSupply();
    uint256 amount = 1;
    /// @dev Specify the msg.sender as minter
    console.log('Msg.sender: %s', msg.sender);
    console.log('Tx origin: %s', tx.origin);
    console.log('Contract owner: %s', c.owner());
    /**
     * A Foundry cheat code => https://book.getfoundry.sh/cheatcodes/ that simulates
     * the msg.sender to be the address specified. More on msg.sender later.
     */
    // vm.startPrank(msg.sender);
    /// @dev We expect c.ownerOf(0) to revert since the token id 0 does not exist yet
    /**
     * Expects the line below to revert. Reverting in Solidity means that an exception is thrown,
     * with an optional message, and the amount of gas spent on the transaction is returned.
     * Then, the contract reverts to its original state.
     */
    vm.expectRevert();
    c.ownerOf(0);
    /// @dev Initial supply should be 0
    assertEq(initialSupply, 0);
    /// @dev Mint token
    c.mint(amount);
    /// @dev Total supply should now equal the amount we minted
    assertEq(c.totalSupply(), amount);
    /// @dev Use ERC721 ownerOf() to check that the owner of token 0 is the msg.sender
    assertEq(c.ownerOf(amount - 1), msg.sender);
    // vm.stopPrank();
  }

  /// @notice Fuzz test (within vm assumption constraints) minting max amount allowed
  /// @param amount The amount to mint
  /**
   * Is a special type of test called a fuzz test. It will try every possible value
   * for that data type, constrained by the configuration specified in foundry.toml and by
   * the vm.assume() statements in the test function.
   * So in this case, it will try all possible mint amounts 1 < x < maxSupply.
   */
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
}
