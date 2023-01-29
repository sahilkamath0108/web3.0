require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/7lOJcZaNEmhj44DVTEk0NS7BMf4qntI8",
      accounts: [ 'a62c705a129197f72aea4367ce79cfc309a41912f16f64c1d7a9ff033daa8ecf' ]
    }
  }
}