import { StateRegistryAbi } from '../../abis/StateRegistryAbi'
import { useContractRead } from 'wagmi'

export const StateRegistryData: React.FC = () => {
  const { data, isSuccess, isLoading, isError } = useContractRead({
    abi: StateRegistryAbi,
    address: '0x0000000000000000000000000000000000000000',
    functionName: 'getCurrentState',
  })

  return (
    <>
      <div>
        <h1 className="text-xl font-bold">State Registry</h1>
        <div data-testid="StateRegistryData_CurrentState">
          {isSuccess && data !== undefined
            ? `byontSupply: ${data.byontSupply.toString()}, mByontCirculatingSupply: ${data.mByontCirculatingSupply.toString()}, lpByontSupply: ${data.lpByontSupply.toString()}, reserveMByontBalance: ${data.reserveMByontBalance.toString()}, stabilityPoolByontBalance: ${data.stabilityPoolByontBalance.toString()}, stabilityPoolMByontBalance: ${data.stabilityPoolMByontBalance.toString()}, timestamp: ${data.timestamp.toString()}`
            : null}
        </div>
        {isError ? <div>Could not fetch state registry data</div> : null}
        {isLoading ? <div>Loading...</div> : null}
      </div>
    </>
  )
}
