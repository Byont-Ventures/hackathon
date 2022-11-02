# Cheatsheet

## Environments

We use profiles to differentiate between environments, and the batch auction / core protocol code.

- default (on by default)
- ci
  Add the environment name as environment variable to run it correspondingly.

`FOUNDRY_PROFILE`=ci forge test -vvv --gas-report

## Commands

Pure commands are below, alternatively you can look in package.json for shortcuts.

Build:
`forge build --optimize`

Run tests:
`forge test -vvv --gas-report`

Run tests continuously whilst developing (recommended)
`forge test -vvv --watch`

Get a gas report
`forge test --gas-report`

View coverage:
`forge coverage`

Lint with solhint:
`solhint ./project/{projectname}/*.sol"`

Deploy upgradable with hardhat
`npx hardhat DeployUpgradable --network {args.network} --deployment-data-file {args.deploymentDataFile}`

Verify upgradable with hardhat

`npx hardhat VerifyUpgradable --network {args.network} --deployment-data-file {args.deploymentDataFile}`

Upgrade with hardhat
`npx hardhat UpgradeContract --network {args.network} --deployment-data-file {args.deploymentDataFile}`
