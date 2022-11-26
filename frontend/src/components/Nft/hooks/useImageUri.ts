import { useQuery } from 'wagmi';

export const useImageUri = (tokenUri: string, enabled = true) =>
  useQuery(
    [tokenUri],
    async () => {
      const cid = tokenUri.split('ipfs://')[1];

      const response = (await (
        await fetch(`https://gateway.pinata.cloud/ipfs/${cid}`)
      ).json()) as { image: string };

      return `https://gateway.pinata.cloud/ipfs/${
        response.image.split('ipfs://')[1]
      }`;
    },
    { enabled }
  );
