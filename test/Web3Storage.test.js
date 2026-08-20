const { expect } = require("chai");

describe("Web3Storage", function () {
  async function deployContract() {
    const Web3Storage =
      await ethers.getContractFactory("Web3Storage");

    const contract =
      await Web3Storage.deploy("Hello Web3");

    await contract.waitForDeployment();

    return contract;
  }

  it("should store the initial message", async function () {
    const contract = await deployContract();

    expect(
      await contract.getMessage()
    ).to.equal("Hello Web3");
  });

  it("should update the message", async function () {
    const contract = await deployContract();

    await contract.setMessage("Hello OPN");

    expect(
      await contract.getMessage()
    ).to.equal("Hello OPN");
  });
});
