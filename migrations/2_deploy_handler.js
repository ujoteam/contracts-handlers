const ETHUSDHandler = artifacts.require('./ETHUSDHandler.sol');

module.exports = (deployer, network) => {
  if (network === 'rinkeby') {
    deployer.deploy(ETHUSDHandler);
  }

  if (network === 'mainnet') {
    deployer.deploy(ETHUSDHandler);
  }
};
