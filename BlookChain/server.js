const HDWalletProvider = require("truffle-hdwallet-provider")
const path = require("path");
const fs = require("fs");
const solc = require("solc");
const BookPath = path.resolve(__dirname, "contract", "book.sol");
const Web3 = require("web3");
const source = fs.readFileSync(BookPath, "utf8");
const provider = new HDWalletProvider(
  "enable nature base midnight visa arm act cup garbage olive bright journey",
  "https://rinkeby.infura.io/v3/0595622d78684678a1bfb50858535d05"
);
const web3 = new Web3(provider);
const input = {
  sources: {
    "book.sol": source,
  },
};
let compiled = solc.compile(input, 1);
 console.log("hello world", compiled.contracts["book.sol:book"].interface)
let contractAddress;
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiled.contracts["book.sol:book"].interface)
  )
    .deploy({
      data: "0x" + compiled.contracts["book.sol:book"].bytecode,
      arguments: [1000, "BCCoin", 0, "BC", 100],
    }) // Passing the bytecode as hexadecimal and the arguments of the constructor
    .send({ gas: "1000000", from: accounts[0] });
  contractAddress = result.options.address;
  console.log("Hello world", result._address);
};
deploy();
