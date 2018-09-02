
import web3 from './web3';

const address = '0x26Ef601F6cb8Cd4CCf34d0d1c50CF7A35F7fCe4E';


const abi = [{ "constant": false, "inputs": [{ "name": "from", "type": "address" }, { "name": "bookName", "type": "string" }], "name": "buyBook", "outputs": [{ "name": "", "type": "string" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "bookName", "type": "string" }, { "name": "bookPrice", "type": "uint256" }], "name": "addBook", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]

export default new web3.eth.Contract(abi, address);