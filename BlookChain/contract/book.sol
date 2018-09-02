pragma solidity ^0.4.21;

contract a{
   struct Book {
       string name;
       uint price ;
   }
    mapping(address => Book) public Books;
    Book[] itemArray;
   //  bytes32[10] bytesArray;
    function addBook(string book , uint price) public{
        var itemnew = Book(book,price);
        Books[msg.sender] = itemnew;
        itemArray.push(itemnew);

    }

   function getBooks() public view returns(uint){
       return itemArray.length;
   }

}