// deployXNFTArbitrum.ts

import { ethers, network } from "hardhat";

async function main() {
    const ccipRouterAddressArbitrumSepolia = `0x2a9c5afb0d0e4bab2bcdae109ec4b0c4be15a165`;
    const linkTokenAddressArbitrumSepolia = `0xb1D4538B4571d411F07960EF2838Ce337FE1E80E`;
    const chainIdArbitrumSepolia = `3478487238524512106`;

    const xNft = await ethers.deployContract("XNFT", [
        ccipRouterAddressArbitrumSepolia,
        linkTokenAddressArbitrumSepolia,
        chainIdArbitrumSepolia
    ]);

    await xNft.waitForDeployment();

    console.log(`XNFT deployed on ${network.name} with address ${xNft.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";
//
// /**
//  * Deploys a contract named "YourContract" using the deployer account and
//  * constructor arguments set to the deployer address
//  *
//  * @param hre HardhatRuntimeEnvironment object.
//  */
// const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//     /*
//       On localhost, the deployer account is the one that comes with Hardhat, which is already funded.
//
//       When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
//       should have sufficient balance to pay for the gas fees for contract creation.
//
//       You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
//       with a random private key in the .env file (then used on hardhat.config.ts)
//       You can run the `yarn account` command to check your balance in every network.
//     */
//     const { deployer } = await hre.getNamedAccounts();
//     const { deploy } = hre.deployments;
//
//     // const ccipRouterAddressEthereumSepolia = process.env.CCIP_ROUTER_ADDRESS_ETHEREUM_SEPOLIA || "0x0bf3de8c5d3e8a2b34d2beeb17abfcebaf363a59";
//     // const linkTokenAddressEthereumSepolia = process.env.LINK_TOKEN_ADDRESS_ETHEREUM_SEPOLIA || "0x779877A7B0D9E8603169DdbD7836e478b4624789";
//     // const chainIdEthereumSepolia = process.env.CHAIN_ID_ETHEREUM_SEPOLIA || "16015286601757825753";
//
//     const ccipRouterAddressArbitrumSepolia = process.env.CCIP_ROUTER_ADDRESS_ARBITRUM_SEPOLIA || "0x2a9c5afb0d0e4bab2bcdae109ec4b0c4be15a165";
//     const linkTokenAddressArbitrumSepolia = process.env.LINK_TOKEN_ADDRESS_ARBITRUM_SEPOLIA || "0xb1D4538B4571d411F07960EF2838Ce337FE1E80E";
//     const chainIdArbitrumSepolia = process.env.CHAIN_ID_ARBITRUM_SEPOLIA || "3478487238524512106";
//
//
//     await deploy("XNFT", {
//         from: deployer,
//         // Contract constructor arguments
//         args: [
//             ccipRouterAddressArbitrumSepolia,
//             linkTokenAddressArbitrumSepolia,
//             chainIdArbitrumSepolia
//         ],
//         log: true,
//         // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
//         // automatically mining the contract deployment transaction. There is no effect on live networks.
//         autoMine: true,
//     });
//
//     // Get the deployed contract to interact with it after deploying.
//     const xNFTArbitrum = await hre.ethers.getContract<Contract>("XNFT", deployer);
// };
//
// export default deployYourContract;
//
// // Tags are useful if you have multiple deploy files and only want to run one of them.
// // e.g. yarn deploy --tags YourContract
// deployYourContract.tags = ["XNFT_ARBITRUM"];
