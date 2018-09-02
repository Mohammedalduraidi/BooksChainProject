import React, { Component } from 'react';
import web3 from './web3';
import token from './token';
import AppBar from "./Components/AppBar"
import _ from 'lodash'
import { Grid, Card, Button, TextField } from "@material-ui/core"
class App extends Component {
  state = {
    owner: '',
    address: '',
    bookName:'',
    price:'',
    BuyBook:'',
    message:'',
    obj:{}
  };
  async componentDidMount() {
    const owner = 'hello world'
    this.setState({ owner });
    
  }

  addBook = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: 'Waiting on transaction success...' });
    await token.methods.addBook(this.state.bookName, this.state.price).send({
      from: accounts[0]
     
    });
    this.setState({ message: 'book has been added' });
  };

  getBooks = async event => {

    const accounts = await web3.eth.getAccounts();
    this.setState({ message: 'Waiting on transaction success...' });
   let alo =   await token.methods.getBooks().call({
    from:accounts[0]
   })
   await console.log("my name is jeff", alo)
   this.setState({
     obj:alo
   })
  };



  buyBook = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log(typeof accounts[0], accounts[0]);
    this.setState({ message: 'Waiting on transaction success...' });
    let result = await token.methods.buyBook(this.state.address,this.state.BuyBook).send({
      from: accounts[0],
      value: web3.utils.toWei('0.0001', 'ether')
    });
    console.log(result.blockHash)
    this.setState({ message: `your success transation is: ${result.blockHash }`});
  };
  // showBooks(){
  //   const {obj} = this.state
  //   let x = [];
  //   for(var k in obj){
  //       x.push(obj[`${k}`]) 
  //   }
  //   return x
  // }

  render() {
    const {obj} = this.state
    return (
      <div>
        <AppBar token={this.state.owner} />
        {this.state.balance}
        <Grid container justify="center" alignItems="center" direction="column">
          <h2>My Currency</h2>
          <p>
            This token is owned by {this.state.owner}.
              </p>
          <hr />
          <Grid item style={{ textAlign: "center" }}>
            <Card style={{ padding: "40px", width: "300px" }}>
              <form onSubmit={this.addBook}>
                <h4>add book</h4>
                <div>
                  <label>name of the book</label>
                  <TextField
                    style={{ margin: "20px" }}
                    value={this.state.bookName}
                    onChange={event => this.setState({ bookName: event.target.value })}
                  />
                </div>
                <div>
                  <label>price for the book</label>
                  <TextField
                    style={{ margin: "20px" }}
                    value={this.state.price}
                    onChange={event => this.setState({ price: event.target.value })}
                  />
                </div>
                
                <Button color="primary" variant="contained" onClick={this.addBook}>ado</Button>
              </form>
            </Card>
          </Grid>
          <hr />
          <Grid item style={{ textAlign: "center" }}>
            <Card style={{ padding: "40px", width: "300px" }}>
              <form onSubmit={this.buyBook}>
                <h4>View your balance of Tokens</h4>
                <div>
                  <label>Enter the address</label>
                  
                  <TextField
                    style={{ margin: "20px" }}
                    address={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}
                  />
                </div>
                <div>
                  <label>Enter the name of the book</label>
                  
                  <TextField
                    style={{ margin: "20px" }}
                    address={this.state.address}
                    onChange={event => this.setState({ BuyBook: event.target.value })}
                  />
                </div>
                <Button color="primary" variant="contained" onClick={this.buyBook}>Get the book</Button>
              </form>
            </Card>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
           
          <form >
                
              <Button color="primary" variant="contained" onClick={this.getBooks}>Get Books</Button>

                <h1 style={{margin:"20px"}}>{this.state.obj["0"]}</h1> <h1>{this.state.obj["1"]}</h1>
                
              </form>
           
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
           
              <form>
                <h4>{this.state.message}</h4>
                
               
                
              </form>
           
          </Grid>
        </Grid>
        
      </div>
    );
  }
}
export default App
