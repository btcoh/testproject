 
var Web3 = require('web3');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if it's available before instantiating
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "SayHello",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

// creation of contract object
var MyContract = web3.eth.contract(abi);

// initiate contract for an address
var myContractInstance = MyContract.at('0x3Ab609265fc2CaeD09966D9d62ddBD58291b5314');

// call constant function
var result = myContractInstance.SayHello();
alert(result);
