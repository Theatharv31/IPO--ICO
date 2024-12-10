import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {TOKEN_ADDRESS, TOKENABI, TOKEN_SALE_ABI, TOKEN_SALE_ADDRESS} from '../Context/constants';


export const CheckIfWalletConnected = async() => {
    try{
      if(!window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      })
      const firstAccount = accounts[0];
      return firstAccount;
      
    }catch{
        console.log(error);
    }
}

export const connectWallet = async() => {
    try{
      if(window.ethereum) return console.log("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      const firstAccount = accounts[0];
      window.location.reload();
      return firstAccount;
      
    }catch{
        console.log(error);
    }
}

//interacting with token contract
const fetchTokenContract = (signerOrProvider) => 
    new ethers.Contract(TOKEN_ADDRESS, TOKENABI, signerOrProvider);

export const connectingTOKENCONTRACT = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchTokenContract(signer);
        return contract;
    } catch (error) {
        console.error(error);
    }
};

export const getBalance = async() => {
  try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      return await signer.getBalance();
  } catch (error) {
      console.error(error);
  }
}

//interacting with tokenSale contract
const fetchToken_SALE_Contract = (signerOrProvider) => 
  new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);

export const connectingTOKEN_SALE_CONTRACT = async() => {
  try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchToken_SALE_Contract(signer);
      return contract;
  } catch (error) {
      console.error(error);
  }
}

