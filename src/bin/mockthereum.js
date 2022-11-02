#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * SPDX-FileCopyrightText: 2022 Tim Perry <tim@httptoolkit.tech>
 * SPDX-License-Identifier: Apache-2.0
 */

const childProcess = require('child_process')
const Mockthereum = require('mockthereum')

handleArgs(process.argv).catch((e) => {
  console.error(e)
  process.exit(1)
})

async function handleArgs(args) {
  const remainingArgs = args.slice(2)
  let nextArg = remainingArgs.shift()
  while (nextArg) {
    if (nextArg === '-c') {
      await runCommandWithServer(remainingArgs.join(' '))
      return
    } else {
      break
    }
  }

  console.log('Usage: mockthereum -c <test command>')
  process.exit(1)
}

async function runCommandWithServer(command) {
  const server = Mockthereum.getAdminServer()
  await server.start()

  let realProcess = childProcess.spawn(command, [], {
    shell: true,
    stdio: 'inherit',
  })

  realProcess.on('error', (error) => {
    server.stop().then(function () {
      console.error(error)
      process.exit(1)
    })
  })

  realProcess.on('exit', (code, signal) => {
    server.stop().then(function () {
      if (code == null) {
        console.error('Executed process exited due to signal: ' + signal)
        process.exit(1)
      } else {
        process.exit(code)
      }
    })
  })
}
