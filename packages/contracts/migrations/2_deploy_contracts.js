var ERC20Mintable = artifacts.require("./ERC20Mintable.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC20Mintable)
};
