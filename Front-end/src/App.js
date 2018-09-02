import React, { Component } from 'react';
import web3 from './web3';
import token from './token';
import AppBar from "./Components/AppBar"
import Axios from 'axios'
import { Grid, Card, Button, TextField } from "@material-ui/core"
class App extends Component {
  state = {
    owner: '',
    adress: '',
    bookName:'',
    price:'',
    BuyBook:'',
    message:''
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
  buyBook = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log(typeof accounts[0], accounts[0]);
    this.setState({ message: 'Waiting on transaction success...' });
    let result = await token.methods.buyBook(this.state.address,this.state.BuyBook).call({
      from: accounts[0]
    });
    console.log(result)
    this.setState({ message: result });
  };
  // transfer = async event => {
  //   event.preventDefault();
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({ message: 'Waiting on transaction success...' });
  //   await token.methods.transfer(this.state.address, this.state.value).send({
  //     from: accounts[0]
  //   });

  //   this.setState({ message: "transaction has been entered" });
  // };
  // transferFrom = async event => {
  //   event.preventDefault();
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({ message: 'Waiting on transaction success...' });
  //   await token.methods.transferFrom(this.state.addressFrom, this.state.address, this.state.value).send({
  //     from: accounts[0]
  //   });

  //   this.setState({ message: "transaction has been entered" });
  // };
  // approve = async event => {
  //   event.preventDefault();
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({ message: 'Waiting on transaction success...' });
  //   await token.methods.approve(this.state.address, this.state.value).send({
  //     from: accounts[0]
  //   });

  //   this.setState({ message: "transaction has been entered" });
  // };
  // getEthers = async event => {
  //   event.preventDefault();
  //   const accounts = await web3.eth.getAccounts();
  //   this.setState({ message: 'Waiting on transaction success...' });
  //   await token.methods.getEthers(this.state.value).send({
  //     from: accounts[0]
  //   });
  //   this.setState({ message: 'You sold your tokens!' });
  // };

  render() {
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
                  <label>Enter the address</label>
                  
                  <TextField
                    style={{ margin: "20px" }}
                    address={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}
                  />
                </div>
                <Button color="primary" variant="contained" onClick={this.getBalance}>Get balance!</Button>
              </form>
            </Card>
          </Grid>
          {/* <hr />
          <h1>{this.state.message}</h1>
          <hr />
          <Grid item style={{ textAlign: "center" }}>
            <Card style={{ padding: "40px", width: "300px" }}>
              <form onSubmit={this.transfer}>
                <h4>Transfer token to an address</h4>
                <div>
                  <label>Enter the address to transfer to</label>
                  <TextField
                    style={{ margin: "20px" }}
                    address={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}
                  />
                  <br /><br />
                  <label>Enter the token to transfer</label>
                  <TextField
                    style={{ margin: "20px" }}
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                  />
                </div>
                <Button color="primary" variant="contained">Transfer tokens!</Button>
              </form>
            </Card>
          </Grid>
          <hr />
          <Grid item style={{ textAlign: "center" }}>
            <Card style={{ padding: "40px", width: "300px" }}>
              <form onSubmit={this.transferFrom}>
                <h4>Transfer token to an address to another</h4>
                <div>
                  <label>Enter the address to transfer from</label>
                  <TextField
                    style={{ margin: "20px" }}
                    onChange={event => this.setState({ addressFrom: event.target.value })}
                  />
                  <br /><br />
                  <label>Enter the address to transfer to</label>
                  <TextField
                    style={{ margin: "20px" }}
                    address={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}
                  />
                  <br /><br />
                  <label>Enter the token to transfer</label>
                  <TextField
                    style={{ margin: "20px" }}
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                  />
                </div>
                <Button color="primary" variant="contained">Transfer tokens!</Button>
              </form>
            </Card>
          </Grid>
          <hr />
          <Grid item style={{ textAlign: "center" }}>
            <Card style={{ padding: "40px", width: "300px" }}>
              <form onSubmit={this.approve}>
                <h4>give permission to an account to spend some ether</h4>
                <div>
                  <label>Enter the address of the spender</label>
                  <TextField
                    style={{ margin: "20px" }}
                    address={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}
                  />
                  <br /><br />
                  <label>Enter the allowance value</label>
                  <TextField
                    style={{ margin: "20px" }}
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                  />
                </div>
                <Button color="primary" variant="contained">Set allowance!</Button>
              </form>
            </Card>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Card style={{ padding: "40px", width: "300px" }}>
              <form onSubmit={this.getEthers}>
                <h4>Sell Tokens</h4>
                <div>
                  <label>Amount of tokens to sell</label>
                  <TextField
                    style={{ margin: "20px" }}
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                  />
                </div>
                <Button color="primary" variant="contained">sell Tokens</Button>
              </form>
            </Card>
          </Grid>
        // </Grid> */}
        </Grid>
      </div>
    );
  }
}
export default App
