export const REPORT_CONTRACT_ABI = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "internalType": "string", "name": "nextStep", "type": "string"}],
  "name": "LogConstructorInitiated",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "internalType": "string", "name": "description", "type": "string"}],
  "name": "LogNewProvableQuery",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "internalType": "string", "name": "result", "type": "string"}],
  "name": "LogResult",
  "type": "event"
}, {
  "inputs": [{"internalType": "string", "name": "_result", "type": "string"}],
  "name": "__callback",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "get",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [{"internalType": "string", "name": "_chainId", "type": "string"}, {
    "internalType": "string",
    "name": "_address",
    "type": "string"
  }],
  "name": "requestForDemo",
  "outputs": [{"internalType": "string", "name": "", "type": "string"}],
  "stateMutability": "payable",
  "type": "function"
}, {"inputs": [], "name": "requestPost", "outputs": [], "stateMutability": "payable", "type": "function"}]