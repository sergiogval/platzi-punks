const { ethers } = require("hardhat")

const deploy = async () => {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contract with the following address:', deployer.address)

  const PlatziPunks = await ethers.getContractFactory("PlatziPunks")
  const deployed = await PlatziPunks.deploy(10000)
  console.log('Deployed contract with the following address:', deployed.address)


}

deploy().then(() => process.exit(0)).catch(error => {
  console.error(error)
  process.exit(1)
})