pragma solidity ^0.4.21;

contract book {
   mapping (address => uint )  balance;
   mapping (address => mapping (string => uint))  price;

   function addBook(string memory bookName,uint bookPrice) public{
       price[msg.sender][bookName] = bookPrice;
   }


   function buyBook(address from,string memory bookName) public payable returns(string memory){
       
       
       if(price[from][bookName] == 0){
           return "the book has been sold";
       }else if(price[from][bookName] > 0 && msg.value < price[from][bookName]){
           return "you dont have enough funds";
       }else if(price[from][bookName] < msg.value){
           balance[msg.sender] -= price[from][bookName];
           balance[from] += price[from][bookName];

           price[msg.sender][bookName] = price[from][bookName];
           price[from][bookName] = 0;
      }
       return "can not find the book";

   }

}