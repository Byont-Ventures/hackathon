// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <0.9.0;

import {Script} from 'forge-std/Script.sol';
import {Contract} from '@smart-contracts/Contract.sol';

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract ContractScript is Script {
  Contract internal foo;

  function run() public {
    vm.startBroadcast();
    foo = new Contract();
    vm.stopBroadcast();
  }
}