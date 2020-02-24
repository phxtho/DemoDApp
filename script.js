const contractAddress = '0x7aBA108BC28826f1Dd246646f60615b6934363F0';

const provider = window.web3.currentProvider;
const web3 = new Web3(provider);

//Get user account
var account;
web3.eth.getAccounts(function(error, accounts){
    account = accounts[0];
    if(!account) {
        console.log("No account found, Connect to Eth Wallet");
    }
});

// Create contract instance
const helloWorlABI = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "newMessage",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "message",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
let contract = new web3.eth.Contract(helloWorlABI, contractAddress);


getMsg();

function sendMsg(){
    msg = document.getElementById('inputtext').value;
    contract.methods.setMessage(msg).send({
        from: account
    }).then(()=> {
        getMsg();
    });
    //getMsg();
}

function getMsg() {
    contract.methods.message().call().then((msg)=> 
    {
        document.getElementById('msgDisplay').innerText = msg;
    });
}