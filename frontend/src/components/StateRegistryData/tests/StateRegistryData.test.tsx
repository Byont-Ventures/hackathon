import '@testing-library/jest-dom'
import { waitFor } from '@testing-library/react'

import { render } from '@/tests/index'
import { StateRegistryData } from '@/components/StateRegistryData'
import { getMockedProvider, EthereumMock } from '@/tests/utils/mocked-providers'

describe('<StateRegistryData />', () => {
  // Start & stop your mock node to reset state between tests:

  describe('getCurrentState', () => {
    beforeEach(async () => await EthereumMock.start())
    afterEach(async () => await EthereumMock.stop())

    // beforeEach(async () => await EthereumMock.start())
    // afterEach(async () => await EthereumMock.stop())
    it('is renders mocked values', async () => {
      await EthereumMock.forCall(
        '0x0000000000000000000000000000000000000000' as `0x${string}`
      )
        .forFunction(
          'function getCurrentState() public view returns (uint256, uint256, uint256, uint256, uint256, uint256, uint256)'
        )
        .thenReturn([1, 2, 3, 4, 5, 6, 7])

      const { queryByTestId } = render(<StateRegistryData />, {
        providerFunc: getMockedProvider,
      })

      await waitFor(() => {
        expect(
          queryByTestId('StateRegistryData_CurrentState')
        ).toHaveTextContent(
          'byontSupply: 6, mByontCirculatingSupply: 5, lpByontSupply: 7, reserveMByontBalance: 4, stabilityPoolByontBalance: 2, stabilityPoolMByontBalance: 3, timestamp: 1'
        )
      })
    })
  })
})
