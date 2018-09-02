
import web3 from './web3';

const address = '0x0203260bDb758FeBcC1b9cac0f89b6984D7902E8';


const abi = [{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"bookName","type":"string"}],"name":"buyBook","outputs":[{"name":"","type":"string"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"bookName","type":"string"},{"name":"bookPrice","type":"uint256"}],"name":"addBook","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getBooks","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"alo","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"jackel","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]

export default new web3.eth.Contract(abi, address);