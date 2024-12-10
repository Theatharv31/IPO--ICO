const hre = require("hardhat");

const tokens = (nToken) => {
    return ethers.utils.parseUnits(nToken.toString(), "ether");
}

async function main() {
    const _initialSupply = tokens(50000000);
     
    //deploy the blockchaincoder contract
    const TheBlockchainCoders = await hre.ethers.getContractFactory("TheBlockchainCoders");
    const theBlockchainCoders = await TheBlockchainCoders.deploy(_initialSupply);

    await theBlockchainCoders.deployed();
    console.log(`TheBlockchainCoders: ${theBlockchainCoders.address}`);

    //deploy toke sale
    const _tokenPrice = tokens(1);
    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = await TokenSale.deploy(theBlockchainCoders.address, _tokenPrice);

    await tokenSale.deployed();
    console.log(`TokenSale: ${tokenSale.address}`);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
