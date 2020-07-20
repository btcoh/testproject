 
var Web3 = require('web3');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if it's available before instantiating
var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/5d0468ce18ad4a39a6aa19313d7af945"));

 // wei是以太坊上的的最小单位，ether小数点后18位为一个wei
	var balanceWei = web3.eth.getBalance("0x9D3592092e23606E899fb8f05692Ed1a3b323F4e").toNumber();
	// 从wei转换成ether
	var balance = web3.fromWei(balanceWei, 'ether');
	 alert(balance);
