var OrionFactory = artifacts.require('OrionFactory')

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(OrionFactory, accounts[0], {from: accounts[0]})
}