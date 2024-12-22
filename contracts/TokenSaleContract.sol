// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./TheBlockchainCoders.sol";

contract TokenSale {
    address public admin;
    TheBlockchainCoders public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokenSold;

    mapping(address => uint256) public contributions; // Tracks each buyer's contribution

    event Sell(address _buyer, uint256 _amount);
    event Refund(address _buyer, uint256 _amount);

    constructor(TheBlockchainCoders _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyToken(uint256 _numberOfTokens) public payable {
        uint256 totalPrice = multiply(_numberOfTokens, tokenPrice);
        require(msg.value == totalPrice, "Incorrect Ether value sent");
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, "Not enough tokens in contract");
        require(tokenContract.transfer(msg.sender, _numberOfTokens * 1 ether), "Token transfer failed");

        contributions[msg.sender] += msg.value; // Track contribution
        tokenSold += _numberOfTokens;

        emit Sell(msg.sender, _numberOfTokens);
    }

    function refund() public {
        uint256 amountPaid = contributions[msg.sender];
        require(amountPaid > 0, "No contributions to refund");

        // Reset the contribution before transferring Ether to prevent re-entrancy attacks
        contributions[msg.sender] = 0;

        // Transfer Ether back to the buyer
        payable(msg.sender).transfer(amountPaid);

        emit Refund(msg.sender, amountPaid);
    }

    function endSale() public {
        require(msg.sender == admin, "Only admin can end the sale");

        // Transfer remaining tokens to admin
        require(
            tokenContract.transfer(admin, tokenContract.balanceOf(address(this))),
            "Token transfer to admin failed"
        );

        // Transfer remaining Ether to admin
        payable(admin).transfer(address(this).balance);
    }
}
