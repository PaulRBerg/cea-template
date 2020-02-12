/* global assert, artifacts, contract, web3 */
const {toWei} = require("web3-utils");

const ERC20 = artifacts.require("ERC20");

contract("ERC20", (accounts) => {
  const owner = accounts[0];
  let token = {};

  beforeEach(async () => {
    token = await ERC20.new({from: owner});
    await token.mint(accounts[0], toWei("1000"));
  });

  it("allows token transfers", async () => {
    const recipient = accounts[1];
    await token.transfer(recipient, toWei("10"), {from: owner});

    const ownerBalance = await token.balanceOf(owner);
    assert.equal(ownerBalance, toWei("990"));

    const recipientBalance = await token.balanceOf(recipient);
    assert.equal(recipientBalance, toWei("10"));
  });
});