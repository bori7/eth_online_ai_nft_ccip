// scripts/crossChainTransfer.ts

import { ethers, network } from "hardhat";
import { Wallet } from "ethers";
import { XNFT, XNFT__factory } from "../typechain-types";

async function main() {
    if (network.name !== `arbitrumSepolia`) {
        console.error(`Must be called from Arbitrum Sepolia`);
        return 1;
    }

    const privateKey = process.env.PRIVATE_KEY!;
    // const rpcProviderUrl = process.env.AVALANCHE_FUJI_RPC_URL;
    const rpcProviderUrl = process.env.ARBITRUM_SEPOLIA_RPC_URL;
    // const rpcProviderUrl = process.env.ETHEREUM_SEPOLIA_RPC_URL;

    const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
    const wallet = new Wallet(privateKey);
    const signer = wallet.connect(provider);

    const xNftAddressArbitrumSepolia = `0x41C6D1c02006B86689DC975c1F17e859ad5a19Cc`;

    const from = `0xd5fB4bfD1Fa5d2Ea0c22cc30713033738bE05291`;
    const to = `0xd5fB4bfD1Fa5d2Ea0c22cc30713033738bE05291`;
    const tokenId = 0; // put NFT token id here
    const destinationChainSelector = `16015286601757825753`;
    const payFeesIn = 1; // 0 - Native, 1 - LINK

    const xNft: XNFT = XNFT__factory.connect(xNftAddressArbitrumSepolia, signer);

    const tx = await xNft.crossChainTransferFrom(
        from,
        to,
        tokenId,
        destinationChainSelector,
        payFeesIn
    );

    console.log(`Transaction hash: ${tx.hash}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});